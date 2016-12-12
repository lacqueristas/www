import {mergeDeep} from "ramda-extra"

export default function storeToken ({state, payload}) {
  return mergeDeep(
    state,
    {
      ephemeral: payload
    }
  )
}
