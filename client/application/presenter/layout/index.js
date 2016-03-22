import {p} from "@cycle/dom"
import {
  ifElse,
  isNil,
  prop,
  pipe,
  always
} from "ramda"
import page from "../page"
import pageHeading from "../pageHeading"
import {feed} from "~/client/activities/presenter"

const blankFeed: Function = always(p("No activities."))
const noFeedOrFeed: Function = pipe(
  prop("activities"),
  ifElse(isNil, blankFeed, feed)
)

export default (state: Object) => {
  return page(
    [
      pageHeading("Lacqueristas"),
      noFeedOrFeed(state)
    ]
  )
}
