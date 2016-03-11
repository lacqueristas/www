import {
  pipe,
  prop,
  defaultTo
} from "ramda"

export default pipe(
  prop("data"),
  defaultTo([])
)
