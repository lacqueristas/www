import {
  filter,
  path,
  equals,
  unary
} from "ramda"
import {pipe} from "sanctuary"

import {v1Accounts} from "~/client/sdk"

const urlPath: Array = [
  "request",
  "url"
]
const matchingAccountsList: Function = pipe(
  [
    path(urlPath),
    equals(v1Accounts.list().url)
  ]
)

export default filter(unary(matchingAccountsList))
