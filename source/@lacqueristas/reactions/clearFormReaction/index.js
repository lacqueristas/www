import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

export default function clearFormReaction ({state, payload: slug}: {state: StateType, payload: string}): StateType {
  return mergeDeepRight(state)(nestedObjOf(["ephemeral", "forms", slug])(undefined))
}
