import {omit} from "ramda"

export default function clearForm ({state, payload: {slug}}) {
  return {
    ...state,
    ui: {
      ...state.ui,
      forms: omit(slug, state.ui.forms)
    },
  }
}
