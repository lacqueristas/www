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
  reduce,
  replace,
  prop
} from "ramda"

export default ({activities}) => {
  const UPPER_KEYS = [
    "subowner",
    "owner",
    "subdomain",
    "domain",
    "superdomain"
  ]
  const renderTemplate = (collection) => (member) => {
    const {
      include
    } = collection
    const {
      attributes: {
        summary
      },
      relationships
    } = member

    return reduce((accumulated, key) => {
      return replace(`{{${key}.name}}`, `{{${key}.name}}`, accumulated)
    }, summary, UPPER_KEYS)
  }
  const toItem = pipe(
    renderTemplate(activities),
    li
  )
  const list = map(toItem)
  const data = prop("data", activities)

  return article([
    p("Hello, world"),
    button("#fetchLatestActivities", "Fetch Latest Activities"),
    ul(list(data))
  ])
}
