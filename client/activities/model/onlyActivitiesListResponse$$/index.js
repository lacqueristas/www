import {
  filter,
  path,
  equals,
  unary
} from "ramda"
import {pipe} from "sanctuary"
import {ACTIVITIES_LIST_URL} from "~/client/sdk/activities"

const urlPath = [
  "request",
  "url"
]
const onlyActivitiesList = unary(pipe(
  [
    path(urlPath),
    equals(ACTIVITIES_LIST_URL)
  ]
))

export default filter(onlyActivitiesList)
