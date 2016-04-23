import {ifElse} from "ramda"
import {isEmpty} from "ramda"
import {pipe} from "ramda"
import {prop} from "ramda"
import {always} from "ramda"

export default pipe(
  prop("text"),
  ifElse(
    isEmpty,
    always({}),
    JSON.parse
  )
)
