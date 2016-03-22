import {
  PROTOCOL,
  HOST,
  PORT,
  VERSION
} from "~/client/sdk/api"

const ACCOUNTS_PATH: string = `${VERSION}/accounts`
const ACCOUNTS_LIST_URL: string = `${PROTOCOL}://${HOST}:${PORT}/${ACCOUNTS_PATH}`
const ACCOUNTS_LIST_METHOD: string = "GET"

export {
  ACCOUNTS_PATH,
  ACCOUNTS_LIST_URL,
  ACCOUNTS_LIST_METHOD
}
