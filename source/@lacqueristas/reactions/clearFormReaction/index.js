import {mergeDeep} from "ramda-extra"

export default function clearFormReaction ({state, payload: slug}: {state: StateType, payload: string}): StateType {
  return mergeDeep(
    state,
    {ephemeral: {forms: {[slug]: {}}}}
  )
}
