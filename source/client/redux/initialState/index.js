import urlParse from "url-parse"
import store from "store"
import {omit} from "ramda"
import {mergeDeep} from "ramda-extra"

const raw = {
  ephemeral: {
    current: {},
    forms: {},
  },
  resources: {},
}

export default function initialState (): any {
  const state = store.get("state") || {}

  return mergeDeep(
    raw,
    {
      navigation: urlParse(location, true),
      ...omit(["navigation"], state),
    }
  )
}
