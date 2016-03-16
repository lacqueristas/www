import {
  prop,
  groupBy,
  map,
  unary
} from "ramda"
import {pipe} from "sanctuary"

import asRecords from "../asRecords"

export default unary(pipe(
  [
    // {links: Object, data: Array[n], included: Array[n]}
    prop("data"),
    // [{Object}, n]
    groupBy(prop("type")),
    // {String: [{Object}, a, b, n], n}
    map(asRecords)
    // {[type]: Object, n}
  ]
))
