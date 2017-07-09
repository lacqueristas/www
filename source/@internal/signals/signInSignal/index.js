import {pipe} from "ramda"
import {path} from "ramda"
import {prop} from "ramda"
import resolveP from "@unction/resolvep"
import allObjectP from "@unction/allobjectp"

import startLoadingSignal from "../startLoadingSignal"
import finishLoadingSignal from "../finishLoadingSignal"
import updateLocationSignal from "../updateLocationSignal"
import clearFormSignal from "../clearFormSignal"
import mergeResourceSignal from "../mergeResourceSignal"
import storeCurrentSignal from "../storeCurrentSignal"
import exceptionSignal from "../exceptionSignal"

import pullAccount from "../pullAccount"
import pushSession from "../pushSession"

export default function signInSignal (slug: string) {
  return function thunk (dispatch, getState, {client}: {client) {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = prop(slug)(forms)

    const sessionRequest = pushSession(client)
    const accountRequest = pullAccount(client)

    return resolveP(dispatch(startLoadingSignal(slug)))
      .then((): Promise<SessionResourceType> => sessionRequest(attributes))
      .then((session): Promise<{mergedResourceSignal, storeCurrentSignal, session> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(session)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: session.id,
            key: "session",
          })),
          session,
        })
      })
      .then(({session}: {session): Promise<AccountResourceType> => accountRequest({id: path(["relationships", "account", "data", "id"], session)}))
      .then((account): Promise<{mergedResourceSignal, storeCurrentSignal> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(account)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: account.id,
            key: "account",
          })),
        })
      })
      .then((): Promise<{finishLoadingSignal, clearFormSignal, updateLocationSignal: updateLocationSignal}> => {
        return allObjectP({
          finishLoadingSignal: dispatch(finishLoadingSignal(slug)),
          clearFormSignal: dispatch(clearFormSignal(slug)),
          updateLocationSignal: dispatch(updateLocationSignal("/front-page")),
        })
      })
      .then(()=> dispatch({type: "signInSignal"}))
      .catch(pipe(exceptionSignal, dispatch))
  }
}
