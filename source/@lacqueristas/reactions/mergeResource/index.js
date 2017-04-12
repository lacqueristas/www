import {groupBy} from "ramda"
import {prop} from "ramda"
import {indexBy} from "ramda"
import {mergeDeep} from "ramda-extra"
import {treeify} from "ramda-extra"

import asGraph from "./asGraph"

const resourceTreeify = treeify([
  groupBy(prop("type")),
  indexBy(prop("id")),
])

export default function mergeResource ({state, payload}: {state: StateType, payload: Object}): StateType {
  return {
    ...state,
    resources: asGraph(
      mergeDeep(
        state.resources,
        resourceTreeify([payload])
      )
    ),
  }
}
