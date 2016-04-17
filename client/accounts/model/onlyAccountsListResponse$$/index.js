import {filter} from "ramda"
import {path} from "ramda"
import {equals} from "ramda"
import {pipe} from "ramda"

import {v1Accounts} from "~/client/sdk"

export default filter(pipe(
  path([
    "request",
    "url"
  ]),
  equals(v1Accounts.list().url)
))
