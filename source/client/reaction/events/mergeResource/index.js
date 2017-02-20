import {mergeDeep} from "ramda-extra"

import asGraph from "../../asGraph"
import treeify from "./treeify"

export default function mergeResource ({state, payload}) {
  const {data} = payload

  return {
    ...state,
    resources: asGraph(mergeDeep(state.resources, treeify([data]))),
  }
}
