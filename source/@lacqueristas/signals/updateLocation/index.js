import urlParse from "url-parse"
import updateNavigation from "../updateNavigation"

export default function updateLocation (href: string): Function {
  return function thunk (dispatch: Function, getState: Function, {history}: {history: HistoryType}): SignalType {
    const destination = urlParse(href, true)

    history.push(destination)

    return dispatch(updateNavigation(destination))
  }
}
