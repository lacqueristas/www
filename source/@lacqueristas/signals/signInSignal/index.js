import {path} from "ramda"
import {resolveP} from "ramda-extra"
import {allObjectP} from "ramda-extra"

import startLoadingSignal from "../startLoadingSignal"
import finishLoadingSignal from "../finishLoadingSignal"
import updateLocationSignal from "../updateLocationSignal"
import clearFormSignal from "../clearFormSignal"
import mergeResourceSignal from "../mergeResourceSignal"
import storeCurrentSignal from "../storeCurrentSignal"

import pullAccount from "../pullAccount"
import pushSession from "../pushSession"

export default function signInSignal (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    const sessionRequest = pushSession(client)
    const accountRequest = pullAccount(client)

    return resolveP(dispatch(startLoadingSignal(slug)))
      .then((): Promise<SessionResourceType> => sessionRequest(attributes))
      .then((session: SessionResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType, session: SessionResourceType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(session)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: session.id,
            key: "self",
          })),
          session,
        })
      })
      .then(({session}: {session: SessionResourceType}): Promise<AccountResourceType> => accountRequest({id: path(["relationships", "account", "data", "id"], session)}))
      .then((account: AccountResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(account)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: account.id,
            key: "account",
          })),
        })
      })
      .then((): Promise<{finishLoadingSignal: SignalType, clearFormSignal: SignalType, updateLocationSignal: updateLocationSignal}> => {
        return allObjectP({
          finishLoadingSignal: dispatch(finishLoadingSignal(slug)),
          clearFormSignal: dispatch(clearFormSignal(slug)),
          updateLocationSignal: dispatch(updateLocationSignal("/front-page")),
        })
      })
      .then((): SignalType => dispatch({type: "signInSignal"}))
  }
}
