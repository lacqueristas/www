import {map} from "ramda"
import {indexBy} from "ramda"
import {prop} from "ramda"
import {pipe} from "ramda"

import asRecord from "./asRecord"

export default pipe(
  // [{type, id, attributes: Object, relationships: Object, links: Object}, n]
  map(asRecord),
  // [{type, id, ...attributes, ...relationships, ...links}, n]
  indexBy(prop("id"))
  // {[id]: {type, id, ...attributes, ...relationships, ...links}, n]
)
