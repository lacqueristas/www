import {
  map,
  prop,
  unary
} from "ramda"
import {pipe} from "sanctuary"
import {
  ol,
  li,
  p
} from "@cycle/dom"

const asListItem = unary(pipe(
  [
    prop("summary"),
    p,
    li
  ]
))
const asList = map(asListItem)

export default (activities) => ol(asList(activities))
