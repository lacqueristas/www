const PROTOCOL = window.API_PROTOCOL
const HOST = window.API_HOST
const PORT = window.API_PORT
const PATH = "v1/activities"
const LIST_METHOD = "GET"
const LIST_URL = `${PROTOCOL}://${HOST}:${PORT}/${PATH}`
const MEDIATYPE = "application/lacqueristas.api+json; version=1"

export default () => {
  return {
    url: LIST_URL,
    method: LIST_METHOD,
    headers: {
      "Accept": MEDIATYPE,
      "Content-Type": MEDIATYPE
    }
  }
}
