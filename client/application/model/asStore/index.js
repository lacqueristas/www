import {prop} from "ramda"
import {pipe} from "sanctuary"

import asCompleteGraph from "../asCompleteGraph"

export default pipe(
  [
    // {key, value}
    prop("value"),
    // "{[type]: Object, n}"
    JSON.parse,
    // {[type]: Object, n}
    asCompleteGraph
    // {[type]: Object, n}
  ]
)
