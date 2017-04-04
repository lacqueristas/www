export default function clearForm (slug: string): SignalType {
  return {
    type: "clearForm",
    payload: {slug},
  }
}
