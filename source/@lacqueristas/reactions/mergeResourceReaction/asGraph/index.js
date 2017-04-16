import {map} from "ramda"

import perCollection from "./perCollection"

// Tree -> Graph
export default function asGraph (tree: StateType): StateType {
  return map(perCollection(tree), tree)
}
