export default function startLoading (slug) {
  return {
    type: "startLoading",
    payload: slug,
  }
}
