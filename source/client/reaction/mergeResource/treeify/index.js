import {map} from "ramda"

import indexById from "./indexById"
import groupByType from "./groupByType"

export default function treeify (resources) {
  return map(indexById, groupByType(resources))
}
