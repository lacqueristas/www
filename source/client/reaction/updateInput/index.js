import {mergeDeep} from "ramda-extra"

export default function updateInput ({state, payload: {slug, attributes}}) {
  return mergeDeep(
    state,
    {
      ui: {
        forms: {
          [slug]: attributes
        }
      }
    }
  )
}
