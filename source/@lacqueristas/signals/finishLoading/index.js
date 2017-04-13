export default function finishLoading (slug: string): SignalType {
  return {
    type: "finishLoading",
    payload: slug,
  }
}
