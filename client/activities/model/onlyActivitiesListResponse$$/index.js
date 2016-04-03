import {
  filter,
  path,
  equals,
  unary
} from "ramda"
import {pipe} from "sanctuary"

import {v1Activities} from "~/client/sdk"

const urlPath: Array = [
  "request",
  "url"
]
const matchingActivitiesList: Function = pipe(
  [
    path(urlPath),
    equals(v1Activities.list().url)
  ]
)

export default filter(unary(matchingActivitiesList))
