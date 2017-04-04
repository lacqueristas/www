import {resolveP} from "ramda-extra"

import updateLocation from "../updateLocation"

export default function clickAnchor (href) {
  return function thunk (dispatch: ReduxDispatchType): Promise<SignalType> {
    return resolveP(href)
      .then((): SignalType => dispatch(updateLocation(href)))
  }
}
