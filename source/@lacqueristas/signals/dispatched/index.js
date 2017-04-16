import {map} from "ramda"
import {merge} from "ramda"

import piped from "./piped"

export default function dispatched (signals: {[name]: Function}): Function {
  return function dispatchedSignals (dispatch: ReduxDispatchType, props: mixed): {[name]: Function} {
    return merge(
      map(piped(dispatch), signals),
      props
    )
  }
}
