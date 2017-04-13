export default function mergeResource (payload: ResourceType): SignalType {
  return {
    type: "mergeResource",
    payload,
  }
}
