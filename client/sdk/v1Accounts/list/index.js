const PROTOCOL = process.env.API_PROTOCOL || "http"
const HOST = process.env.API_HOST || "localhost"
const PORT = process.env.API_PORT || "8081"
const MEDIATYPE = process.env.API_MEDIATYPE || "application/lacqueristas.api+json; version=1"
const ACCOUNTS_PATH = "v1/accounts"
const ACCOUNTS_LIST_METHOD = "GET"
const ACCOUNTS_LIST_URL = `${PROTOCOL}://${HOST}:${PORT}/${ACCOUNTS_PATH}`

export default () => {
  return {
    url: ACCOUNTS_LIST_URL,
    method: ACCOUNTS_LIST_METHOD,
    headers: {
      "Accept": MEDIATYPE,
      "Content-Type": MEDIATYPE
    }
  }
}
