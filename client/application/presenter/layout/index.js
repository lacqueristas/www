import {p} from "@cycle/dom"

import page from "../page"
import pageHeading from "../pageHeading"
import {feed} from "~/client/activities/presenter"

const noFeed = p("No activities.")

export default (state) => {
  return page(
    [
      pageHeading("Lacqueristas"),
      state.activities ? feed(state.activities) : noFeed
    ]
  )
}
