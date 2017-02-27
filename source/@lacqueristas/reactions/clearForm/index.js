import {omit} from "ramda"

export default function clearForm ({state, payload}) {
  const {slug} = payload

  return {
    ...state,
    ephemeral: {
      ...state.ephemeral,
      forms: omit(slug, state.ephemeral.forms),
    },
  }
}
