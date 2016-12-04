import {aside} from "ramda-extra"
import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import clearForm from "../clearForm"

export default function pushAccount ({slug}) {
  return function thunk (dispatch, getState, {sdk}) {
    debugger
    return sdk
      .then(aside(startingRequest, dispatch))
      .then((client) => client.accounts.v1.create({
        payload: {
          data: {
            type: "accounts",
            attributes: getState().ui.forms[slug]
          }
        }
      }))
      .then(aside(finishingRequest, dispatch))
      .then(aside(() => clearForm(slug), dispatch))
      // .then(() => dispatch(mergeResource()))
  }
}
