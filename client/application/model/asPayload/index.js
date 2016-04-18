import {prop} from "ramda"
import {defaultTo} from "ramda"
import {pipe} from "ramda"

export default pipe(
  prop("text"),
  JSON.parse,
  defaultTo({})
)
