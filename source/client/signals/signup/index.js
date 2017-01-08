import {tapP} from "ramda-extra"
import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"

import createAccount from "./createAccount"
import createSession from "./createSession"

export default function signup ({slug}) {
  return function thunk (dispatch, getState, {sdk}) {
    const {ui} = getState()
    const {forms} = ui
    const attributes = forms[slug]

    return sdk
      .then(tapP(() => dispatch(startingRequest())))
      .then(tapP(createAccount({attributes, dispatch})))
      .then(tapP(createSession({attributes, dispatch})))
      .then(() => dispatch(finishingRequest()))
      .then(() => dispatch(clearForm("sign-up")))
      .then(() => dispatch(updateLocation("/front-page")))
  }
}
