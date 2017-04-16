export default function finishLoadingSignal (slug: string): SignalType {
  return {
    type: "finishLoadingSignal",
    payload: slug,
  }
}
