import {juxt} from "ramda"
import {omit} from "ramda"
import {props} from "ramda"
import {prop} from "ramda"
import {mergeAll} from "ramda"
import {mapObjIndexed} from "ramda"
import {map} from "ramda"
import {pipe} from "ramda"

import coerce from "./coerce"

const identifiers = pipe(
  // {type, id, attributes: Object, relationships: Object, links: Object}
  omit(["attributes", "links", "relationships"])
  // {type, id}
)
const attributes = pipe(
  // {type, id, attributes: Object, relationships: Object, links: Object}
  props(["attributes", "links"]),
  // [Object, n]
  mergeAll
  // {summary, self}
)
const relationships = pipe(
  // {type, id, attributes: Object, relationships: Object, links: Object}
  prop("relationships"),
  // {[relation]: Object, n}
  map(prop("data"))
  // {[relation]: {id, type}, n}
)
const mapping = {
  "created-at": "date",
  "read-at": "date",
  "updated-at": "date"
}

export default pipe(
  // {type, id, attributes: Object, relationships: Object, links: Object}
  juxt([identifiers, attributes, relationships]),
  // [{type, id}, {summary, self, actor: Object}]
  mergeAll,
  mapObjIndexed(coerce(mapping))
)
