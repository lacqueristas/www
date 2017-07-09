export default function exceptionSignal (payload) {
  return {
    type: "exceptionSignal",
    payload,
  }
}
