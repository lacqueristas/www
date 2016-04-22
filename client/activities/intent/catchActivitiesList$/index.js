import {onlyActivitiesListResponse$$} from "~/client/activities/model"
import {asPayload} from "~/client/application/model"

export default (response$) => {
  return onlyActivitiesListResponse$$(response$).switch().map(asPayload)
}
