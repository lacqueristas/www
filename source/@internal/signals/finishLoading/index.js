export default function finishLoading (slug) {
  return {
    type: "finishLoading",
    payload: slug,
  }
}
