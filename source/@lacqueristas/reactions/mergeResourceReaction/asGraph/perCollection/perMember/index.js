import {map} from "ramda"
import {objOf} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"

import mergeData from "./mergeData"

export default function perMember (tree) {
  const mergeDataTrees = map(mergeData(tree))

  return function perMemberWithTree (member) {
    const {relationships = {}} = member

    return mergeDeepRight(member)(objOf("relationships")(mergeDataTrees(relationships)))
  }
}
