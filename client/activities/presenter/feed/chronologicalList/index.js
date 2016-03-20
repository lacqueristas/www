import {
  map,
  prop,
  unary
} from "ramda"
import {pipe} from "sanctuary"
import {render} from "mustache"
import {
  ol,
  li,
  p
} from "@cycle/dom"

const asListItem = pipe(
  [
    (activity) => render(activity.summary, activity),
    p,
    li
  ]
)
const asList = map(unary(asListItem))

export default pipe(
  [
    // [Object, n]
    asList,
    // [li, n]
    ol
    // ol([li, n])
  ]
)
