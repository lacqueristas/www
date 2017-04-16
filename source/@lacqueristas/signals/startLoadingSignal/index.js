export default function startLoadingSignal (slug: string): SignalType {
  return {
    type: "startLoadingSignal",
    payload: slug,
  }
}
