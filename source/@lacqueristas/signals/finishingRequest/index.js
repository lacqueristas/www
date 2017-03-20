export default function finishingRequest (slug: string): SignalType {
  return {
    type: "finishingRequest",
    payload: {slug},
  }
}
