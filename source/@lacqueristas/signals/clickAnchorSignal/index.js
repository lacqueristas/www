import {resolveP} from "ramda-extra"

import updateLocationSignal from "../updateLocationSignal"

export default function clickAnchorSignal (href: string): SignalType {
  return function thunk (dispatch: ReduxDispatchType): Promise<SignalType> {
    return resolveP(href)
      .then((): SignalType => dispatch(updateLocationSignal(href)))
      .then((): SignalType => dispatch({type: "clickAnchorSignal"}))
  }
}
