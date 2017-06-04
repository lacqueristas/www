export default function finishLoadingSignal (slug) {
  return {
    type: "finishLoadingSignal",
    payload: slug,
  }
}
