import store from "store"
import {omit} from "ramda"
import {prop} from "ramda"

export default function persist (state) {
  store.set("state", omit(["navigation"])(state))

  store.set("resources", prop("resources")(state))
  store.set("ephemeral", prop("ephemeral")(state))

  return state
}
