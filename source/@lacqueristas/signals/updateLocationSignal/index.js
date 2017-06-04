import urlParse from "url-parse"
import resolveP from "@unction/resolvep"
import updateNavigationSignal from "../updateNavigationSignal"

export default function updateLocationSignal (href: string) {
  const destination = urlParse(href, true)

  return function thunk (dispatch, getState, {history}) {
    history.push(destination)

    return resolveP(history.push(destination))
      .then(() => dispatch(updateNavigationSignal(destination)))
      .then(() => dispatch({type: "updateLocationSignal"}))
  }
}
