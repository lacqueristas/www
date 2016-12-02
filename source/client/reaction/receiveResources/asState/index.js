import {mergeDeep} from "ramda-extra"

import treeify from "./treeify"

export default (state, incoming) => {
  return {
    ...state,
    resources: mergeDeep(state.resources, treeify(incoming))
  }
}
