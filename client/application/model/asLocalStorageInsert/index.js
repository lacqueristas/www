import {mergeWith} from "ramda"
import {merge} from "ramda"

import normalize from "./normalize"

const mergeShallow = mergeWith(merge)

export default (payloads, store) => {
  return {
    key: "store",
    value: JSON.stringify(mergeShallow(store, normalize(payloads)))
  }
}
