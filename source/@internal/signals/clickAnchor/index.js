import updateLocation from "../updateLocation"

export default function clickAnchor (href) {
  return function thunk (dispatch) {
    dispatch(updateLocation(href))
    dispatch({type: "clickAnchor"})
  }
}
