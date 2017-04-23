import {groupBy} from "ramda"
import {prop} from "ramda"
import {indexBy} from "ramda"
import {merge} from "ramda"
import {objOf} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"
import treeify from "@unction/treeify"

import asGraph from "./asGraph"

const resourceTreeify = treeify([
  groupBy(prop("type")),
  indexBy(prop("id")),
])

export default function mergeResourceReaction ({state, payload}: {state: StateType}): StateType {
  const resources = prop("resources")(state)
  const tree = resourceTreeify([payload])

  return merge(state)(objOf("resources")(asGraph(mergeDeepRight(resources)(tree))))
}
