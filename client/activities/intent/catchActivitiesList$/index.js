import {onlyActivitiesListResponse$$} from "~/client/activities/model"
import {asNative} from "~/client/application/model"

export default (response$) => {
  return onlyActivitiesListResponse$$(response$)
    .switch()
    .map(asNative)
}
