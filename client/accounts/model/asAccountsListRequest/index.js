import {
  map,
  unary
} from "ramda"

import {v1Accounts} from "~/client/sdk"

export default map(unary(v1Accounts.list))
