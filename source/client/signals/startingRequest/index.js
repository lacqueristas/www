export default function startingRequest (slug) {
  return {
    type: "startingRequest",
    payload: {slug},
  }
}
