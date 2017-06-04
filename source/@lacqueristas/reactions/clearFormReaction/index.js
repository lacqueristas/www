import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

export default function clearFormReaction (state) {
  return function clearFormReactionState (payload) {
    return mergeDeepRight(state)(nestedObjOf(["ephemeral", "forms", payload])(undefined))
  }
}
