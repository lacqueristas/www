import updateLocation from "../updateLocation"

export default function clickAnchor (href) {
  return function thunk (dispatch) {
    return Promise
      .resolve(href)
      .then(() => dispatch(updateLocation(href)))
  }
}
