import urlParse from "url-parse"
import updateNavigation from "../updateNavigation"

export default function updateLocation (href) {
  return function thunk (dispatch, getState, {history}) {
    const destination = urlParse(href, true)

    dispatch(updateNavigation(destination))

    history.push(destination)
  }
}
