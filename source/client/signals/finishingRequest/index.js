export default function finishingRequest (slug) {
  return {
    type: "finishingRequest",
    payload: {slug}
  }
}
