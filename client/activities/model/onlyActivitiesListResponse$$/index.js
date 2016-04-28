import {equals} from "ramda"
import {props} from "ramda"

import {v1Activities} from "~/client/sdk"

export default (HTTP$$) => {
  return HTTP$$.filter(({request: {url, method}}) => {
    return equals(props(["method", "url"], v1Activities.list()), [method, url])
  })
}
