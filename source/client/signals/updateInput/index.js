export default function updateInput ({slug, name, value}) {
  return {
    type: "updateInput",
    payload: {
      slug,
      attributes: {
        [name]: value
      }
    }
  }
}
