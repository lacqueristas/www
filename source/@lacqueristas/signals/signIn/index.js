import {path} from "ramda"
import {allObjectP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeCurrent from "../storeCurrent"

import pullAccount from "./pullAccount"
import pushSession from "./pushSession"

export default function signIn (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    const sessionRequest = pushSession(client)
    const accountRequest = pullAccount(client)

    return Promise
      .resolve(dispatch(startingRequest(slug)))
      .then((): Promise<SessionResourceType> => sessionRequest(attributes))
      .then((session: SessionResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType, session: SessionResourceType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResource(session)),
          storeCurrentSignal: dispatch(storeCurrent({
            id: session.id,
            key: "self",
          })),
          session,
        })
      })
      .then(({session}: {session: SessionResourceType}): Promise<AccountResourceType> => accountRequest({id: path(["relationships", "account", "data", "id"], session)}))
      .then((account: AccountResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResource(account)),
          storeCurrentSignal: dispatch(storeCurrent({
            id: account.id,
            key: "account",
          })),
        })
      })
      .then((): Promise<{finishingRequestSignal: SignalType, clearFormSignal: SignalType, updateLocationSignal: updateLocationSignal}> => {
        return allObjectP({
          finishingRequestSignal: dispatch(finishingRequest(slug)),
          clearFormSignal: dispatch(clearForm(slug)),
          updateLocationSignal: dispatch(updateLocation("/front-page")),
        })
      })
      .then((): SignalType => dispatch({type: "signIn"}))
  }
}
