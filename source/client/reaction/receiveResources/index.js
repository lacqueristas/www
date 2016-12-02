import asState from "./asState"

export default function receiveResources ({state, payload}) {
  return asState(state, payload)
}
