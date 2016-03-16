import {
  map,
  prop
} from "ramda"
import {pipe} from "sanctuary"
import {
  ol,
  li,
  p
} from "@cycle/dom"

const asListItem = pipe(prop("summary"), p, li)
const asList = map(asListItem)

export default (activities) => ol(asList(activities))
