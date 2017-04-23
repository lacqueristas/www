import {pathOr} from "ramda"
import {objOf} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"

const defaultRelationship = {}

export default function mergeData (tree) {
  return function mergeDataWithTree (relationship) {
    const {data} = relationship

    if (data) {
      const {id} = data
      const {type} = data

      return mergeDeepRight(relationship)(objOf("data")(pathOr(defaultRelationship, [type, id], tree)))
    }

    return {}
  }
}
