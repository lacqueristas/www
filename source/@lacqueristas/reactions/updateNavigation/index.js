export default function updateNavigation ({state, payload: {navigation}}): StateType {
  return {
    ...state,
    navigation,
  }
}
