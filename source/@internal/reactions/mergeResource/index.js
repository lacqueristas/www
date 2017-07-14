import {groupBy} from "ramda"
import {path} from "ramda"
import {indexBy} from "ramda"
import nestedObjOf from "@unction/nestedobjof"
import mergeDeepRight from "@unction/mergedeepright"
import treeify from "@unction/treeify"
import arrayify from "@unction/arrayify"

export default function mergeResource (state) {
  return function mergeResourceState (payload) {
    return payload
      | arrayify
      | treeify([
        groupBy(path(["type"])),
        indexBy(path(["id"])),
      ])
      | nestedObjOf(["resources"])
      | mergeDeepRight(state)
  }
}
