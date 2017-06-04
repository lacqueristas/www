export default function updateInputSignal ({slug, name, value, multiple = false}){
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
