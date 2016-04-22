import {Observable} from "rx"

import {v1Accounts} from "~/client/sdk"

const INTERVAL = 1000

export default () => {
  return Observable.interval(INTERVAL).map(v1Accounts.list)
}
