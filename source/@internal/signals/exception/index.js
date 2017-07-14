export default function exception (payload) {
  return {
    type: "exception",
    payload,
  }
}
