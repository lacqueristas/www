import {pathOr} from "ramda"
import {mergeDeep} from "ramda-extra"

const defaultRelationship = {}

export default function asGetter (tree) {
  return function asGetterWithTree (relationship) {
    return function getter () {
      const {data} = relationship
      const {id} = data
      const {type} = data

      return mergeDeep(
        relationship,
        {
          data: pathOr(defaultRelationship, [type, id], tree)
        }
      )
    }
  }
}
