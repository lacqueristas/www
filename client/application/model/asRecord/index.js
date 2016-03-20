import {
  juxt,
  omit,
  props,
  mergeAll,
  mapObjIndexed,
  unary
} from "ramda"
import {pipe} from "sanctuary"

import coerce from "../coerce"

const nonnested = pipe(
  [
    // {type, id, attributes: Object, relationships: Object, links: Object}
    omit(["attributes", "links", "relationships"])
    // {type, id}
  ]
)
const nested = pipe(
  [
    // {type, id, attributes: Object, relationships: Object, links: Object}
    props(["attributes", "links", "relationships"]),
    // [Object, Object, Object]
    mergeAll
    // {summary, self, actor: Object}
  ]
)
const mapping = {
  "created-at": "date"
}

export default pipe(
  [
    // {type, id, attributes: Object, relationships: Object, links: Object}
    juxt([nonnested, nested]),
    // [{type, id}, {summary, self, actor: Object}]
    mergeAll,
    mapObjIndexed(unary(coerce(mapping)))
  ]
)
