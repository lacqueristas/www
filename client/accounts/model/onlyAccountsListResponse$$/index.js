import {equals} from "ramda"
import {props} from "ramda"

import {v1Accounts} from "~/client/sdk"

export default (HTTP$$) => {
  return HTTP$$.filter(({request: {url, method}}) => {
    return equals(props(["method", "url"], v1Accounts()), [url, method])
  })
}
