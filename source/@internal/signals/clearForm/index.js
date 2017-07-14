export default function clearForm (slug) {
  return {
    type: "clearForm",
    payload: slug,
  }
}
