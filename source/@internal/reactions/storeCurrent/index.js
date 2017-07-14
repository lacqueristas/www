import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

export default function storeCurrent (state) {
  return function storeCurrentState (payload) {
    const {key} = payload
    const {id} = payload

    return id
      | nestedObjOf(["ephemeral", "current", key])
      | mergeDeepRight(state)
  }
}
