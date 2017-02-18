import {mergeDeep} from "ramda-extra"

export default function updateInput ({state, payload: {slug, attributes}}) {
  return mergeDeep(
    state,
    {
      ephemeral: {
        forms: {
          [slug]: attributes,
        },
      },
    },
  )
}
