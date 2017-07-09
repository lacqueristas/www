import resolveP from "@unction/resolvep"

import updateLocationSignal from "../updateLocationSignal"

export default function clickAnchorSignal (href) {
  return function thunk (dispatch) {
    return resolveP(href)
      .then(() => dispatch(updateLocationSignal(href)))
      .then(() => dispatch({type: "clickAnchorSignal"}))
  }
}
