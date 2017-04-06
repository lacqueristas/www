import {mergeDeep} from "ramda-extra"

type StoreCurrentReactionType = {
  state: StateType,
  payload: {
    id: string,
    key: string,
  }
}

export default function storeCurrent ({state, payload: {id, key}}: StoreCurrentReactionType): StateType {
  return mergeDeep(
    state,
    {ephemeral: {current: {[key]: id}}}
  )
}
