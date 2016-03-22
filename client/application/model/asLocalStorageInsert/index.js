import {
  mergeWith,
  merge
} from "ramda"

import normalize from "../normalize"

const mergeShallow: Function = mergeWith(merge)

export default (payloads: Object, store: string|null): Object => {
  return {
    key: "store",
    value: JSON.stringify(mergeShallow(JSON.parse(store), normalize(payloads)))
  }
}
