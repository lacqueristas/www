import {mergeDeep} from "ramda-extra"

export default function storeSelf ({state, payload}: {state: StateType, payload: string}): StateType {
  return mergeDeep(
    state,
    {ephemeral: {current: {self: payload}}}
  )
}
