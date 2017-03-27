export default function startingRequest (slug: string): SignalType {
  return {
    type: "startingRequest",
    payload: slug,
  }
}
