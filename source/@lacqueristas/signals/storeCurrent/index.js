type CurrentStoreType = {
  id: string,
  key: string,
}

export default function storeCurrent (payload: CurrentStoreType): SignalType {
  return {
    type: "storeCurrent",
    payload,
  }
}
