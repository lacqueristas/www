import {
  prop,
  groupBy,
  map,
  unary
} from "ramda"
import {pipe} from "sanctuary"

import asRecords from "../asRecords"

export default pipe(
  [
    // {links: Object, data: Array[n], included: Array[n]}
    prop("data"),
    // [Object, n]
    groupBy(prop("type")),
    // {[type]: Array[n], n}
    map(unary(asRecords))
    // {[type]: Object, n}
  ]
)
