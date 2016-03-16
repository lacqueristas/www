import {
  prop,
  unary
} from "ramda"
import {pipe} from "sanctuary"

export default unary(pipe(
  [
    prop("value"),
    JSON.parse
  ]
))
