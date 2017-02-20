import {map} from "ramda"
import {mergeDeep} from "ramda-extra"

import mergeData from "./mergeData"

export default function perMember (tree) {
  return function perMemberWithTree (member) {
    const {relationships = {}} = member

    return {
      ...member,
      relationships: map(mergeData(tree), relationships),
    }
  }
}
