import urlParse from "url-parse"
import store from "store"
import {omit} from "ramda"
import {merge} from "ramda"
import {objOf} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"

const raw = {
  ephemeral: {
    current: {},
    forms: {},
  },
  resources: {},
}

export default function initialState (): any {
  const state = store.get("state") || {}

  return mergeDeepRight(raw)(merge(objOf("navigation")(urlParse(location, true)), omit(["navigation"], state)))
}
