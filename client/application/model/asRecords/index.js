import {
  map,
  indexBy,
  prop
} from "ramda"
import {pipe} from "sanctuary"

import asRecord from "../asRecord"

export default pipe(
  // [{type, id, attributes: Object, relationships: Object, links: Object}, n]
  map(asRecord),
  // [{type, id, ...attributes, ...relationships, ...links}, n]
  indexBy(prop("id"))
  // {[id]: {type, id, ...attributes, ...relationships, ...links}, n]
)
