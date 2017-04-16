export default function clearFormSignal (slug: string): SignalType {
  return {
    type: "clearFormSignal",
    payload: slug,
  }
}
