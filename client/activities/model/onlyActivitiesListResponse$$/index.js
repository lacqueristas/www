import {
  filter,
  pipe,
  path,
  equals
} from "ramda"
import {ACTIVITIES_LIST_URL} from "~/client/sdk/activities"

const urlPath = ["request", "url"]
const onlyActivitiesList = pipe(
  path(urlPath),
  equals(ACTIVITIES_LIST_URL)
)

export default filter(onlyActivitiesList)
