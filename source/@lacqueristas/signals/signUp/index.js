import {allObjectP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeCurrent from "../storeCurrent"

import pushAccount from "./pushAccount"
import pushSession from "./pushSession"

export default function signUp (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    const accountRequest = pushAccount(client)
    const sessionRequest = pushSession(client)

    return Promise
      .resolve(dispatch(startingRequest(slug)))
      .then((): Promise<AccountResourceType> => accountRequest(attributes))
      .then((account: AccountResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResource(account)),
          storeCurrentSignal: dispatch(storeCurrent({
            id: account.id,
            key: "account",
          })),
        })
      })
      .then((): Promise<SessionResourceType> => sessionRequest(attributes))
      .then((session: SessionResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResource(session)),
          storeCurrentSignal: dispatch(storeCurrent({
            id: session.id,
            key: "self",
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
      .then((): SignalType => dispatch({type: "signUp"}))
  }
}
