import store from "store"
import {omit} from "ramda"

export default function persist (state: StateType): StateType {
  store.set("state", omit(["navigation"], state))

  return state
}
