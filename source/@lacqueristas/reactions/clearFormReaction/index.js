import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

export default function clearFormReaction (state: StateType): Function {
  return function clearFormReactionState (payload: string): StateType {
    return mergeDeepRight(state)(nestedObjOf(["ephemeral", "forms", payload])(undefined))
  }
}
