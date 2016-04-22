import {onlyAccountsListResponse$$} from "~/client/accounts/model"
import {asPayload} from "~/client/application/model"

export default (response$) => {
  return onlyAccountsListResponse$$(response$).switch().map(asPayload)
}
