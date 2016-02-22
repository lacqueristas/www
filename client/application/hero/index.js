import {
  p,
  article,
  button,
  ul,
  li
} from "@cycle/dom"
import {
  map,
  pipe,
  path
} from "ramda"

export default ({activities}) => {
  const toItem = pipe(
    path(["attributes", "summary"]),
    li
  )
  const list = map(toItem)

  return article([
    p("Hello, world"),
    button("#fetchLatestActivities", "Fetch Latest Activities"),
    ul(list(activities))
  ])
}
