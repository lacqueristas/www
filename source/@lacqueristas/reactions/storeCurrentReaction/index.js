import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

export default function storeCurrentReaction ({state, payload}: StoreCurrentReactionType): StateType {
  const {key} = payload
  const {id} = payload

  return mergeDeepRight(state)(nestedObjOf(["ephemeral", "current", key])(id))
}
