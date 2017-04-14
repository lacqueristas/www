type UpdateInputPayloadType = {
  slug: string,
  name: string,
  value: any,
  multiple: boolean
}

export default function updateInput ({slug, name, value, multiple = false}: UpdateInputPayloadType): SignalType {
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
