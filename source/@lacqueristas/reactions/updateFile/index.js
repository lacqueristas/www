import {mergeDeep} from "ramda-extra"

export default function updatFile ({state, payload: {slug, name, file}}: {state: StateType}): StateType {
  return mergeDeep(
    state,
    {ephemeral: {forms: {[slug]: {[name]: file}}}}
  )
}
