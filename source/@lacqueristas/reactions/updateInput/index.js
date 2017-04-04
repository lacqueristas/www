import {mergeDeep} from "ramda-extra"

export default function updateInput ({state, payload: {slug, name, value, multiple}}: {state: StateType}): StateType {
  if (multiple) {
    return mergeDeep(
      state,
      {ephemeral: {forms: {[slug]: {[name]: [value]}}}}
    )
  }

  return mergeDeep(
    state,
    {ephemeral: {forms: {[slug]: {[name]: value}}}}
  )
}
