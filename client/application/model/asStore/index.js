import {prop} from "ramda"
import {pipe} from "sanctuary"

export default pipe(
  prop("value"),
  JSON.parse
)
