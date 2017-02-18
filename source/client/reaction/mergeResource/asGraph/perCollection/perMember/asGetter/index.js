import {pathOr} from "ramda"
import {mergeDeep} from "ramda-extra"

const defaultRelationship = {}

export default function asGetter (tree) {
  return function asGetterWithTree (relationship) {
    const {data} = relationship

    if (data) {
      const {id} = data
      const {type} = data

      return mergeDeep(
        relationship,
        {
          data: pathOr(defaultRelationship, [type, id], tree),
        }
      )
    }

    return {}
  }
}
