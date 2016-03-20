import {unary} from "ramda"
import {pipe} from "sanctuary"

import {poll$} from "~/client/application/intent"
import {asAccountsListRequest} from "~/client/accounts/model"

export default unary(pipe(
  [
    poll$,
    asAccountsListRequest
  ]
))
