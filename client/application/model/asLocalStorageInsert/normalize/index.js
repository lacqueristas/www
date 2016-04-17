import {prop} from "ramda"
import {groupBy} from "ramda"
import {map} from "ramda"
import {pipe} from "ramda"

import asRecords from "./asRecords"

export default pipe(
  // {links: Object, data: Array[n], included: Array[n]}
  prop("data"),
  // [Object, n]
  groupBy(prop("type")),
  // {[type]: Array[n], n}
  map(asRecords)
  // {[type]: Object, n}
)
