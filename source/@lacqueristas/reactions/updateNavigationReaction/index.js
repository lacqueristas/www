export default function updateNavigationReaction ({state, payload}: {state: StateType}): StateType {
  const {navigation} = payload

  return {
    ...state,
    navigation,
  }
}
