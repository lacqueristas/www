import mapValues from "@unction/mapvalues"
import {merge} from "ramda"

import piped from "./piped"

export default function dispatched (signals: {[name]: Function}): Function {
  return function dispatchedSignals (dispatch: ReduxDispatchType, props: mixed): {[name]: Function} {
    return merge(
      mapValues(piped(dispatch))(signals),
      props
    )
  }
}
