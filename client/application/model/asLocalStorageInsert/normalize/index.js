import {prop} from "ramda"
import {groupBy} from "ramda"
import {map} from "ramda"

import asRecords from "./asRecords"

// @contract("{links, data, included} -> {...} | {}")
export default (payload) => {
  // {links: Object, data: Array[n], included: Array[n]}
  if (payload.data) {
    return map(asRecords, groupBy(prop("type"), payload.data))
    // {[type]: Object, n}
  }
  return {}
}
