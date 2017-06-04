export default function updateNavigationSignal (navigation){
  return {
    type: "updateNavigationSignal",
    payload: {navigation},
  }
}
