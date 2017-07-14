import {pipe} from "ramda"
import {path} from "ramda"
import {prop} from "ramda"
import resolveP from "@unction/resolvep"
import allObjectP from "@unction/allobjectp"

import startLoading from "../startLoading"
import finishLoading from "../finishLoading"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeCurrent from "../storeCurrent"
import exception from "../exception"

import pullAccount from "../pullAccount"
import pushSession from "../pushSession"

export default function signIn (slug) {
  return function thunk (dispatch, getState, {client}) {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = prop(slug)(forms)

    const sessionRequest = pushSession(client)
    const accountRequest = pullAccount(client)

    return resolveP(dispatch(startLoading(slug)))
      .then(() => sessionRequest(attributes))
      .then((session) => {
        return allObjectP({
          mergedResource: dispatch(mergeResource(session)),
          storeCurrent: dispatch(storeCurrent({
            id: session.id,
            key: "session",
          })),
          session,
        })
      })
      .then(({session}) => accountRequest({id: path(["relationships", "account", "data", "id"], session)}))
      .then((account) => {
        return allObjectP({
          mergedResource: dispatch(mergeResource(account)),
          storeCurrent: dispatch(storeCurrent({
            id: account.id,
            key: "account",
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
      .then(() => dispatch({type: "signIn"}))
      .catch(pipe(exception, dispatch))
  }
}
