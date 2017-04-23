import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

export default function updateInputReaction ({state, payload}: {state: StateType}): StateType {
  const {slug} = payload
  const {name} = payload
  const {value} = payload
  const {multiple} = payload

  if (multiple) {
    return mergeDeepRight(state)(nestedObjOf(["ephemeral", "forms", slug, name])([value]))
  }

  return mergeDeepRight(state)(nestedObjOf(["ephemeral", "forms", slug, name])(value))
}
