export default function exceptionSignal (payload: any): SignalType {
  return {
    type: "exceptionSignal",
    payload,
  }
}
