import Dotenv from "dotenv"
import {join} from "ramda"

Dotenv.load({silent: true})

const PROTOCOL = process.env.API_PROTOCOL
const HOST = process.env.API_HOST
const PORT = process.env.API_PORT
const MEDIATYPE = process.env.API_MEDIATYPE
const ACTIVITIES_PATH: string = "v1/activities"
const ACTIVITIES_LIST_METHOD: string = "GET"
const ACTIVITIES_LIST_URL: string = `${PROTOCOL}://${HOST}:${PORT}/${ACTIVITIES_PATH}`
const DEFAULT_INCLUDE: Array<string> = [
  "actor"
]
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
