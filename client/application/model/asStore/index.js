import {
  pipe,
  prop
} from "ramda"

export default pipe(
  prop("value"),
  JSON.parse
)
