import {groupBy} from "ramda"
import {path} from "ramda"
import {indexBy} from "ramda"
import {objOf} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"
import treeify from "@unction/treeify"

const toResourceTree = treeify([
  groupBy(path(["type"])),
  indexBy(path(["id"])),
])
const asResources = objOf("resources")

export default function mergeResourceReaction (state) {
  return function mergeResourceReactionState (payload) {
    return mergeDeepRight(
      state
    )(
      asResources(toResourceTree([payload]))
    )
  }
}
