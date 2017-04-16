import {mergeDeep} from "ramda-extra"

export default function updateInputReaction ({state, payload}: {state: StateType}): StateType {
  const {slug} = payload
  const {name} = payload
  const {value} = payload
  const {multiple} = payload

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
