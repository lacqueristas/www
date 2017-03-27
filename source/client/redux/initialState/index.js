import urlParse from "url-parse"
import {get} from "store"
import {omit} from "ramda"
import {mergeDeep} from "ramda-extra"

const raw = {
  ephemeral: {forms: {}},
  resources: {},
}

export default function initialState (): any {
  const state = get("state") || {}

  return mergeDeep(
    raw,
    {
      navigation: urlParse(location, true),
      ...omit(["navigation"], state),
    }
  )
}
