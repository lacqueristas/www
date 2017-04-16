export default function updateInputSignal ({slug, name, value, multiple = false}: UpdateInputPayloadType): SignalType {
  return {
    type: "updateInputSignal",
    payload: {
      slug,
      name,
      value,
      multiple,
    },
  }
}
