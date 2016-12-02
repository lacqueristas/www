import {aside} from "ramda-extra"
import startingRequest from "./startingRequest"
import finishingRequest from "./finishingRequest"

export default function requestAccount (name, email, password) {
  return function thunk (dispatch, {sdk}) {
    return sdk
      .then(aside(startingRequest, dispatch))
      .then((client) => client("v1/accounts").create())
      .then(aside(finishingRequest, dispatch))
      .then(() => dispatch(mergeResource()))
  }
}
