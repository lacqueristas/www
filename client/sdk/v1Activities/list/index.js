const PROTOCOL = process.env.API_PROTOCOL || "http"
const HOST = process.env.API_HOST || "localhost"
const PORT = process.env.API_PORT || "8081"
const MEDIATYPE = process.env.API_MEDIATYPE || "application/lacqueristas.api+json; version=1"
const ACTIVITIES_PATH = "v1/activities"
const ACTIVITIES_LIST_METHOD = "GET"
const ACTIVITIES_LIST_URL = `${PROTOCOL}://${HOST}:${PORT}/${ACTIVITIES_PATH}`

export default () => {
  return {
    url: ACTIVITIES_LIST_URL,
    method: ACTIVITIES_LIST_METHOD,
    headers: {
      "Accept": MEDIATYPE,
      "Content-Type": MEDIATYPE
    }
  }
}
