import {prop} from "ramda"

import receiveResources from "./receiveResources"
import requestSignUp from "./requestSignUp"
import updateInput from "./updateInput"
import updateNavigation from "./updateNavigation"
import updateLocation from "./updateLocation"

export const events = {
  receiveResources,
  updateLocation,
  requestSignUp,
  updateInput,
  updateNavigation
}
export default function reaction (state, signal) {
  const {type} = signal
  const {payload} = signal

  return (events[type] || prop("state"))({state, payload})
}
