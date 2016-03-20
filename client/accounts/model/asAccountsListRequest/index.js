import {
  map,
  unary
} from "ramda"

import {accountsList} from "~/client/sdk"

export default map(unary(accountsList))
