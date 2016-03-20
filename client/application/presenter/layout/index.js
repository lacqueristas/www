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

const blankFeed = always(p("No activities."))
const noFeedOrFeed = pipe(
  prop("activities"),
  ifElse(isNil, blankFeed, feed)
)

export default (state) => {
  return page(
    [
      pageHeading("Lacqueristas"),
      noFeedOrFeed(state)
    ]
  )
}
