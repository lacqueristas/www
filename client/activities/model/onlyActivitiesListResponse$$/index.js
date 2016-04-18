import {filter} from "ramda"
import {path} from "ramda"
import {equals} from "ramda"
import {pipe} from "ramda"

import {v1Activities} from "~/client/sdk"

export default filter(pipe(
  path([
    "request",
    "url"
  ]),
  equals(v1Activities.list().url)
))
