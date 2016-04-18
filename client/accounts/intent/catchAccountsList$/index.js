import {map} from "ramda"
import {pipe} from "ramda"

import {onlyAccountsListResponse$$} from "~/client/accounts/model"
import {selectResponse$} from "~/client/application/intent"
import {asPayload} from "~/client/application/model"

export default pipe(
  onlyAccountsListResponse$$,
  selectResponse$,
  map(asPayload)
)
