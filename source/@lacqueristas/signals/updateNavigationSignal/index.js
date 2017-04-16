export default function updateNavigationSignal (navigation: LocationType): SignalType {
  return {
    type: "updateNavigationSignal",
    payload: {navigation},
  }
}
