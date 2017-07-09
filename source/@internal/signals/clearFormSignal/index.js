export default function clearFormSignal (slug) {
  return {
    type: "clearFormSignal",
    payload: slug,
  }
}
