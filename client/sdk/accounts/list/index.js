import {join} from "ramda"
import {MEDIATYPE} from "~/client/sdk/api"
import {
  ACCOUNTS_LIST_URL,
  ACCOUNTS_LIST_METHOD
} from "../../accounts"

const includeJoin = join(".")

export default (options = {}) => {
  const {
    include,
    page
  } = options
  const {
    number: pageNumber,
    size: pageSize
  } = page || {}

  const DEFAULT_INCLUDE = []
  const DEFAULT_PAGE_NUMBER = 0
  const DEFAULT_PAGE_SIZE = 10

  return {
    url: ACCOUNTS_LIST_URL,
    method: ACCOUNTS_LIST_METHOD,
    query: {
      "include": includeJoin(include || DEFAULT_INCLUDE),
      "page[number]": pageNumber || DEFAULT_PAGE_NUMBER,
      "page[size]": pageSize || DEFAULT_PAGE_SIZE
    },
    headers: {
      "Accept": MEDIATYPE,
      "Content-Type": MEDIATYPE
    }
  }
}
