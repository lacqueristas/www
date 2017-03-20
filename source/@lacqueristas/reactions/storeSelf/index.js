import {mergeDeep} from "ramda-extra"

export default function storeSelf ({state, payload}): StateType {
  return mergeDeep(
    state,
    {ephemeral: {self: payload}}
  )
}
