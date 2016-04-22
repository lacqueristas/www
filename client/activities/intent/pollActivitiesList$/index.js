import {Observable} from "rx"

import {v1Activities} from "~/client/sdk"

const INTERVAL = 1000

export default () => {
  return Observable.interval(INTERVAL).map(v1Activities.list)
}
