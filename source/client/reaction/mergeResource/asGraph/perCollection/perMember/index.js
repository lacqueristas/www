import {map} from "ramda"
import {mergeDeep} from "ramda-extra"

import asGetter from "./asGetter"

export default function perMember (tree) {
  return function perMemberWithTree (member) {
    const {relationships = {}} = member

    return mergeDeep(
      member,
      {
        relationships: map(asGetter(tree), relationships),
      }
    )
  }
}
