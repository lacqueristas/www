import urlParse from "url-parse"
import {resolveP} from "ramda-extra"
import updateNavigationSignal from "../updateNavigationSignal"

export default function updateLocationSignal (href: string): Function {
  const destination = urlParse(href, true)

  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {history}: {history: HistoryType}): SignalType {
    history.push(destination)

    return resolveP(history.push(destination))
      .then((): SignalType => dispatch(updateNavigationSignal(destination)))
      .then((): SignalType => dispatch({type: "updateLocationSignal"}))
  }
}
