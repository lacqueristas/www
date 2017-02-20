import {tapP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeSelf from "../storeSelf"

import createAccount from "./createAccount"
import createSession from "./createSession"

export default function signup ({slug}) {
  return function thunk (dispatch, getState, {client}) {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    return Promise
      .resolve(dispatch(startingRequest({slug})))
      .then(() => {
        return createAccount({
          attributes,
          client,
        })
      })
      .then(({data}) => dispatch(mergeResource(data)))
      .then(() => {
        return createSession({
          attributes,
          client,
        })
      })
      .then(tapP(({data}) => dispatch(mergeResource(data))))
      .then(tapP(({data}) => dispatch(storeSelf({id: data.data.id}))))
      .then(() => dispatch(finishingRequest({slug})))
      .then(() => dispatch(clearForm("sign-up")))
      .then(() => dispatch(updateLocation("/front-page")))
  }
}
