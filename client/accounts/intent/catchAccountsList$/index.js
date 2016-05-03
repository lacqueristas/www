import {onlyAccountsListResponse$} from "~/client/accounts/model"
import {asNative} from "~/client/application/model"

export default (response$) => {
  return onlyAccountsListResponse$(response$).switch().map(asNative)
}
