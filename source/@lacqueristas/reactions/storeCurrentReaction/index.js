import {mergeDeep} from "ramda-extra"

export default function storeCurrentReaction ({state, payload}: StoreCurrentReactionType): StateType {
  const {key} = payload
  const {id} = payload

  return mergeDeep(
    state,
    {ephemeral: {current: {[key]: id}}}
  )
}
