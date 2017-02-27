import {map} from "ramda"

import perMember from "./perMember"

export default function perCollection (tree) {
  return function perCollectionWithTree (collection) {
    return map(perMember(tree), collection)
  }
}
