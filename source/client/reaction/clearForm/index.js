import {omit} from "ramda"

export default function clearForm ({state, payload: {slug}}) {
  return {
    ...state,
    ephemeral: {
      ...state.ephemeral,
      forms: omit(slug, state.ephemeral.forms),
    },
  }
}
