import {resolveP} from "ramda-extra"

import updateLocation from "../updateLocation"

export default function clickAnchor (href) {
  return function thunk (dispatch) {
    return resolveP(href)
      .then(() => dispatch(updateLocation(href)))
  }
}
