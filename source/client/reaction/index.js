import {prop} from "ramda"

import receiveResources from "./receiveResources"
import updateInput from "./updateInput"
import updateNavigation from "./updateNavigation"
import clearForm from "./clearForm"

export const events = {
  receiveResources,
  updateInput,
  clearForm,
  updateNavigation
}
export default function reaction (state, signal) {
  const {type} = signal
  const {payload} = signal

  return (events[type] || prop("state"))({state, payload})
}
