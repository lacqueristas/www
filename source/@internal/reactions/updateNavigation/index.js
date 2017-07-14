export default function updateNavigation (state) {
  return function updateNavigationState (payload) {
    const {navigation} = payload

    return {
      ...state,
      navigation,
    }
  }
}
