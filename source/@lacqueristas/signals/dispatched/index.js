import mapValues from "@unction/mapvalues"
import {merge} from "ramda"

import piped from "./piped"

export default function dispatched (signals) {
  return function dispatchedSignals (dispatch, props) {
    return merge(
      mapValues(piped(dispatch))(signals),
      props
    )
  }
}
