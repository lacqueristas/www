export default function mergeResourceSignal (payload: ResourceType): SignalType {
  return {
    type: "mergeResourceSignal",
    payload,
  }
}
