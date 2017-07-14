export default function updateInput ({slug, name, value, multiple = false}) {
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
