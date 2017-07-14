import {path} from "ramda"
import arrayify from "@unction/arrayify"

export default function attributeSelector ({primaryKey, source, query}) {
  return function attributeSelectorQuery (state, props) {
    const id = path([primaryKey])(props)

    return path(["resources", source, id, "attributes", ...arrayify(query)])(state)
  }
}
