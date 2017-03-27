import {mergeDeep} from "ramda-extra"

export default function updateInput ({state, payload: {slug, attributes}}): StateType {
  return mergeDeep(
    state,
    {ephemeral: {forms: {[slug]: attributes}}}
  )
}
