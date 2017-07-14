import urlParse from "url-parse"
import store from "store"
import {omit} from "ramda"
import {merge} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"

const raw = {
  ephemeral: {
    current: {},
    forms: {},
    location: {},
  },
  resources: {},
}

export default function initialState () {
  const state = store.get("state") || {}
  const navigation = {navigation: urlParse(location, true)}

  return state
    | omit(["navigation"])
    | merge(navigation)
    | mergeDeepRight(raw)
}
