import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

export default function clearForm (state) {
  return function clearFormState (payload) {
    return nestedObjOf(["ephemeral", "forms", payload])()
      | mergeDeepRight(state)
  }
}
