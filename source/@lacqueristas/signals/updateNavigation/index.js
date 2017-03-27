export default function updateNavigation (navigation: LocationType): SignalType {
  return {
    type: "updateNavigation",
    payload: {navigation},
  }
}
