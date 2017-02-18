export default function updateNavigation ({state, payload: {navigation}}) {
  return {
    ...state,
    navigation,
  }
}
