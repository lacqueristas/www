import urlParse from "url-parse"
import updateNavigationSignal from "../updateNavigationSignal"

export default function updateLocationSignal (href: string): Function {
  const destination = urlParse(href, true)

  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {history}: {history: HistoryType}): SignalType {
    history.push(destination)

    return Promise.resolve(history.push(destination))
      .then((): SignalType => dispatch(updateNavigationSignal(destination)))
      .then((): SignalType => dispatch({type: "updateLocationSignal"}))
  }
}
