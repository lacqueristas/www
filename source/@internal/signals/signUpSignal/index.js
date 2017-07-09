import {pipe} from "ramda"
import resolveP from "@unction/resolvep"
import allObjectP from "@unction/allobjectp"

import startLoadingSignal from "../startLoadingSignal"
import finishLoadingSignal from "../finishLoadingSignal"
import updateLocationSignal from "../updateLocationSignal"
import clearFormSignal from "../clearFormSignal"
import mergeResourceSignal from "../mergeResourceSignal"
import storeCurrentSignal from "../storeCurrentSignal"
import exceptionSignal from "../exceptionSignal"

import pushAccount from "../pushAccount"
import pushSession from "../pushSession"

export default function signUpSignal (slug: string) {
  return function thunk (dispatch, getState, {client}: {client) {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    const accountRequest = pushAccount(client)
    const sessionRequest = pushSession(client)

    return resolveP(dispatch(startLoadingSignal(slug)))
      .then((): Promise<AccountResourceType> => accountRequest(attributes))
      .then((account): Promise<{mergedResourceSignal, storeCurrentSignal> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(account)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: account.id,
            key: "account",
          })),
        })
      })
      .then((): Promise<SessionResourceType> => sessionRequest(attributes))
      .then((session): Promise<{mergedResourceSignal, storeCurrentSignal> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(session)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: session.id,
            key: "session",
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
      .then(()=> dispatch({type: "signUpSignal"}))
      .catch(pipe(exceptionSignal, dispatch))
  }
}
