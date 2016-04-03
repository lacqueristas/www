import {
  map,
  unary
} from "ramda"

import {v1Activities} from "~/client/sdk"

export default map(unary(v1Activities.list))
