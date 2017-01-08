import {mergeDeep} from "ramda-extra"

import treeify from "./treeify"
import asGraph from "./asGraph"

export default function mergeResource ({state, payload}) {
  return {
    ...state,
    resources: asGraph(mergeDeep(state.resources, treeify([payload.data])))
  }
}
