import {pipe} from "ramda"

import {poll$} from "~/client/application/intent"
import {asActivitiesListRequest} from "~/client/activities/model"

export default pipe(
  poll$,
  asActivitiesListRequest
)
