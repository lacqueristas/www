import updateNavigation from "../updateNavigation"

export default function updateLocation (href) {
  return function thunk (dispatch) {
    return Promise
      .resolve()
      .then(() => dispatch({type: "updateLocation", payload: {href}}))
      .then(() => dispatch(updateNavigation(location)))
  }
}
