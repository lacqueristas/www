import {
  juxt,
  omit,
  props,
  prop,
  mergeAll,
  mapObjIndexed,
  unary,
  map
} from "ramda"
import {pipe} from "sanctuary"

import coerce from "../coerce"

const identifiers: Function = pipe(
  [
    // {type, id, attributes: Object, relationships: Object, links: Object}
    omit(["attributes", "links", "relationships"])
    // {type, id}
  ]
)
const attributes: Function = pipe(
  [
    // {type, id, attributes: Object, relationships: Object, links: Object}
    props(["attributes", "links"]),
    // [Object, n]
    mergeAll
    // {summary, self}
  ]
)
const relationships: Function = pipe(
  [
    // {type, id, attributes: Object, relationships: Object, links: Object}
    prop("relationships"),
    // {[relation]: Object, n}
    map(prop("data"))
    // {[relation]: {id, type}, n}
  ]
)
const mapping: Object = {
  "created-at": "date",
  "read-at": "date",
  "updated-at": "date"
}

export default pipe(
  [
    // {type, id, attributes: Object, relationships: Object, links: Object}
    juxt([identifiers, attributes, relationships]),
    // [{type, id}, {summary, self, actor: Object}]
    mergeAll,
    mapObjIndexed(unary(coerce(mapping)))
  ]
)
