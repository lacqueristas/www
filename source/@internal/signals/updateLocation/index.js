import urlParse from "url-parse"
import updateNavigation from "../updateNavigation"

export default function updateLocation (href) {
  const destination = urlParse(href, true)

  return function thunk (dispatch, getState, {history}) {
    history.push(destination)
    dispatch(updateNavigation(destination))
    dispatch({type: "updateLocation"})
  }
}
