export default function initialState (): ServerStateType {
  return {
    ephemeral: {
      current: {},
      forms: {},
    },
    resources: {},
  }
}
