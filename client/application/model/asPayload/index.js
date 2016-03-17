import {
  prop,
  defaultTo,
  unary
} from "ramda"
import {pipe} from "sanctuary"

export default unary(pipe(
  [
    prop("text"),
    JSON.parse,
    defaultTo({})
  ]
))
