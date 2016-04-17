import {Observable} from "rx"

import {asAccountsListRequest} from "~/client/accounts/model"

const INTERVAL = 1000

export default () => asAccountsListRequest(Observable.interval(INTERVAL))
