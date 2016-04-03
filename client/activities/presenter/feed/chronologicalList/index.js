import {
  map,
  unary
} from "ramda"
import {pipe} from "sanctuary"
import {render} from "mustache"
import {
  ol,
  li,
  p
} from "@cycle/dom"

const asListItem: Function = pipe(
  [
    ({summary, metadata}): string => render(summary, metadata),
    p,
    li
  ]
)
const asList: Function = map(unary(asListItem))

export default pipe(
  [
    // [Object, n]
    asList,
    // [li, n]
    ol
    // ol([li, n])
  ]
)
