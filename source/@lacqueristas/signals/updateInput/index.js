export default function updateInput (slug: string, name: string, value: any, multiple: boolean = false): SignalType {
  return {
    type: "updateInput",
    payload: {
      slug,
      name,
      value,
      multiple,
    },
  }
}
