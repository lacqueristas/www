import {mergeDeep} from "ramda-extra"

export default function storeSelf ({state, payload}) {
  return mergeDeep(
    state,
    {
      ephemeral: {
        self: payload,
      },
    }
  )
}
