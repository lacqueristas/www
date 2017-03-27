export default function storeSelf (payload: string): SignalType {
  return {
    type: "storeSelf",
    payload,
  }
}
