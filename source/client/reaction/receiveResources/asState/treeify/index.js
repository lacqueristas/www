import {map} from "ramda"

import indexById from "./indexById"
import groupByType from "./groupByType"

export default function treeify ({data}) {
  return map(indexById, groupByType(data))
}
