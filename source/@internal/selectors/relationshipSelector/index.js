import {path} from "ramda"
import arrayify from "@unction/arrayify"

export default function relationshipSelector ({primaryKey, foreignKey, source, query}) {
  return function relationshipSelectorQuery (state, props) {
    const id = path([primaryKey])(props)
    const relation = path(["resources", source, id, "relationships", foreignKey, "data"])(state)
    const relationship = path(["resources", path(["type"])(relation), path(["id"])(relation)])(state)

    return path(arrayify(query))(relationship)
  }
}
