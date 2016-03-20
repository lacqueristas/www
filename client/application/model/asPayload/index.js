import {
  prop,
  defaultTo
} from "ramda"
import {pipe} from "sanctuary"

export default pipe(
  [
    prop("text"),
    JSON.parse,
    defaultTo({})
  ]
)
