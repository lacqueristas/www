import {
  map,
  unary
} from "ramda"
import {pipe} from "sanctuary"

import {onlyAccountsListResponse$$} from "~/client/accounts/model"
import {selectResponse$} from "~/client/application/intent"
import {asPayload} from "~/client/application/model"

export default pipe(
  [
    onlyAccountsListResponse$$,
    selectResponse$,
    map(unary(asPayload))
  ]
)
