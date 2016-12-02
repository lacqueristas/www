import {omit} from "ramda"

export default function requestSignUp ({state, payload: {formName, data}}) {
  return {
    ...state,
    ui: {
      ...state.ui,
      forms: omit(formName, state.ui.forms)
    }
  }
}
