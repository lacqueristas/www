import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"
import arrayify from "@unction/arrayify"

export default function updateInput (state) {
  return function updateInputState (payload) {
    const {slug} = payload
    const {name} = payload
    const {value} = payload
    const {multiple} = payload

    if (multiple) {
      return arrayify(value)
        | nestedObjOf(["ephemeral", "forms", slug, name])
        | mergeDeepRight(state)
    }

    return value
      | nestedObjOf(["ephemeral", "forms", slug, name])
      | mergeDeepRight(state)
  }
}
