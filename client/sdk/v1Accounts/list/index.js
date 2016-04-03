import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import {join} from "ramda"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "API_PROTOCOL",
  "API_HOST",
  "API_PORT",
  "API_MEDIATYPE"
])

const {
  env: {
    API_PROTOCOL: PROTOCOL,
    API_HOST: HOST,
    API_PORT: PORT,
    API_MEDIATYPE: MEDIATYPE
  }
} = process
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
