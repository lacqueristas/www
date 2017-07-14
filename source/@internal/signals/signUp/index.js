import {pipe} from "ramda"
import resolveP from "@unction/resolvep"
import allObjectP from "@unction/allobjectp"

import startLoading from "../startLoading"
import finishLoading from "../finishLoading"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeCurrent from "../storeCurrent"
import exception from "../exception"

import pushAccount from "../pushAccount"
import pushSession from "../pushSession"

export default function signUp (slug) {
  return function thunk (dispatch, getState, {client}) {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    const accountRequest = pushAccount(client)
    const sessionRequest = pushSession(client)

    return resolveP(dispatch(startLoading(slug)))
      .then(() => accountRequest(attributes))
      .then((account) => {
        return allObjectP({
          mergedResource: dispatch(mergeResource(account)),
          storeCurrent: dispatch(storeCurrent({
            id: account.id,
            key: "account",
          })),
        })
      })
      .then(() => sessionRequest(attributes))
      .then((session) => {
        return allObjectP({
          mergedResource: dispatch(mergeResource(session)),
          storeCurrent: dispatch(storeCurrent({
            id: session.id,
            key: "session",
          })),
        })
      })
      .then(() => {
        return allObjectP({
          finishLoading: dispatch(finishLoading(slug)),
          clearForm: dispatch(clearForm(slug)),
          updateLocation: dispatch(updateLocation("/front-page")),
        })
      })
      .then(()=> dispatch({type: "signUp"}))
      .catch(pipe(exception, dispatch))
  }
}
