import {
  pipe,
  prop,
  defaultTo
} from "ramda"

export default pipe(
  prop("text"),
  JSON.parse,
  defaultTo({})
)
