import {join} from "ramda"

const PROTOCOL: string = process.env.API_PROTOCOL || "http"
const HOST: string = process.env.API_HOST || "localhost"
const PORT: string = process.env.API_PORT || "8081"
const MEDIATYPE: string = process.env.API_MEDIATYPE || "application/lacqueristas.api+json; version=1"
const ACCOUNTS_PATH: string = "v1/accounts"
const ACCOUNTS_LIST_METHOD: string = "GET"
const ACCOUNTS_LIST_URL: string = `${PROTOCOL}://${HOST}:${PORT}/${ACCOUNTS_PATH}`
const DEFAULT_INCLUDE: Array = []
const DEFAULT_PAGE_NUMBER: number = 0
const DEFAULT_PAGE_SIZE: number = 10
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
