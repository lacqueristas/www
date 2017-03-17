export default function updateInput ({slug, name, value}: {slug: string, name: string, value: any}): SignalType {
  return {
    type: "updateInput",
    payload: {
      slug,
      attributes: {[name]: value},
    },
  }
}
