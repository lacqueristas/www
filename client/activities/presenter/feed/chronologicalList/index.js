import {
  map,
  pipe,
  prop
} from "ramda"
import {
  ol,
  li,
  p
} from "@cycle/dom"

const asListItem = pipe(prop("summary"), p, li)
const asList = map(asListItem)

export default (activities) => ol(asList(activities))
