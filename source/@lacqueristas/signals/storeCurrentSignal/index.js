export default function storeCurrentSignal (payload: CurrentStorePayloadType): SignalType {
  return {
    type: "storeCurrentSignal",
    payload,
  }
}
