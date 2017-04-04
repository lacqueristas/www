export default function updateFile (slug: string, name: string, file: any): SignalType {
  return {
    type: "updateFile",
    payload: {
      slug,
      name,
      file,
    },
  }
}
