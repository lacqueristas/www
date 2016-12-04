export default function updateInput ({state, payload: {slug, attributes}}) {
  return {
    ...state,
    ui: {
      ...state.ui,
      forms: {
        ...state.ui.forms,
        [slug]: {
          ...state.ui.forms[slug],
          ...attributes
        }
      }
    }
  }
}
