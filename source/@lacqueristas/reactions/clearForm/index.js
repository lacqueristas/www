import {mergeDeep} from "ramda-extra"

export default function clearForm ({state, payload: slug}: {state: StateType, payload: string}): StateType {
  return mergeDeep(
    state,
    {ephemeral: {forms: {[slug]: {}}}}
  )
}
