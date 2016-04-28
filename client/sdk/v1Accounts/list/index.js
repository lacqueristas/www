const {env} = process.browser ? window : process
const {API_PROTOCOL} = env
const {API_HOST} = env
const {API_PORT} = env
const RESOURCE = "v1/accounts"
const LIST_METHOD = "GET"
const LIST_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}/${RESOURCE}`
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
