import {
  PROTOCOL,
  HOST,
  PORT,
  VERSION
} from "~/client/sdk/api"

const ACTIVITIES_PATH: string = `${VERSION}/activities`
const ACTIVITIES_LIST_URL: string = `${PROTOCOL}://${HOST}:${PORT}/${ACTIVITIES_PATH}`
const ACTIVITIES_LIST_METHOD: string = "GET"

export {
  ACTIVITIES_PATH,
  ACTIVITIES_LIST_URL,
  ACTIVITIES_LIST_METHOD
}
