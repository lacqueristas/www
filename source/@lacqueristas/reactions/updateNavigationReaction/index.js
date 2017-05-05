export default function updateNavigationReaction (state: StateType): Function {
  return function updateNavigationReactionState (payload: any): StateType {
    const {navigation} = payload

    return {
      ...state,
      navigation,
    }
  }
}
