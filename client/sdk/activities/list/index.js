import {
  MEDIATYPE,
  ENTITY,
  USERNAME,
  PASSWORD
} from "../../api"
import {
  ACTIVITIES_LIST_URL,
  ACTIVITIES_LIST_METHOD
} from "../../activities"


export default (options) => {
  const {
    page
  } = options
  const {
    number: pageNumber,
    size: pageSize
  } = page || {}

  const DEFAULT_PAGE_NUMBER = 0
  const DEFAULT_PAGE_SIZE = 10

  return {
    url: ACTIVITIES_LIST_URL,
    method: ACTIVITIES_LIST_METHOD,
    query: {
      "page[number]": pageNumber || DEFAULT_PAGE_NUMBER,
      "page[size]": pageSize || DEFAULT_PAGE_SIZE
    },
    headers: {
      "Accept": MEDIATYPE,
      "Content-Type": MEDIATYPE,
      "X-Entity": ENTITY
    },
    user: USERNAME,
    password: PASSWORD
  }
}
