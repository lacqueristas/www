export default function startLoading (slug: string): SignalType {
  return {
    type: "startLoading",
    payload: slug,
  }
}
