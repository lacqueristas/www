import {
  p,
  article,
  button,
  ul,
  li
} from "@cycle/dom"
import {
  map
} from "ramda"

export default ({activities}) => {
  const list = map(li)

  return article([
    p("Hello, world"),
    button("#fetchLatestActivities", "Fetch Latest Activities"),
    ul(list(activities))
  ])
}
