export default function updateInput ({state, payload: {formName, data}}) {
  return {
    ...state,
    ui: {
      ...state.ui,
      forms: {
        ...state.ui.forms,
        [formName]: {
          ...state.ui.forms[formName],
          ...data
        }
      }
    }
  }
}
