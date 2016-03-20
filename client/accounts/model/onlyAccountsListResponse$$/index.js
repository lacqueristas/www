import {
  filter,
  path,
  equals,
  unary
} from "ramda"
import {pipe} from "sanctuary"

import {ACCOUNTS_LIST_URL} from "~/client/sdk/accounts"

const urlPath = [
  "request",
  "url"
]
const matchingAccountsList = pipe(
  [
    path(urlPath),
    equals(ACCOUNTS_LIST_URL)
  ]
)

export default filter(unary(matchingAccountsList))
