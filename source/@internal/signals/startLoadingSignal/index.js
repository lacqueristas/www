export default function startLoadingSignal (slug: string){
  return {
    type: "startLoadingSignal",
    payload: slug,
  }
}
