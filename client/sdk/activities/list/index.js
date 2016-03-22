import {join} from "ramda"
import {MEDIATYPE} from "~/client/sdk/api"
import {
  ACTIVITIES_LIST_URL,
  ACTIVITIES_LIST_METHOD
} from "../../activities"

const includeJoin: Function = join(".")

export default (options = {}) => {
  const {
    include,
    page
  } = options
  const {
    number: pageNumber,
    size: pageSize
  } = page || {}

  const DEFAULT_INCLUDE: Array<string> = [
    "actor"
  ]
  const DEFAULT_PAGE_NUMBER: number = 0
  const DEFAULT_PAGE_SIZE: number = 10

  return {
    url: ACTIVITIES_LIST_URL,
    method: ACTIVITIES_LIST_METHOD,
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
