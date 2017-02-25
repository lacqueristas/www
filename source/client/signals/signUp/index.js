import {tapP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeSelf from "../storeSelf"

import pushAccount from "./pushAccount"
import pushSession from "./pushSession"

export default function signUp ({slug}) {
  return function thunk (dispatch, getState, {client}) {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    return Promise
      .resolve(dispatch(startingRequest({slug})))
      .then(() => {
        return pushAccount({
          attributes,
          client,
        })
      })
      .then(({data}) => dispatch(mergeResource(data)))
      .then(() => {
        return pushSession({
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
