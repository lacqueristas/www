export default function updateNavigationReaction (state) {
  return function updateNavigationReactionState (payload) {
    const {navigation} = payload

    return {
      ...state,
      navigation,
    }
  }
}
