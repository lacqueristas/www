import {
  pipe,
  unary
} from "ramda"

import {poll$} from "~/client/application/intent"
import {asActivitiesListRequest} from "~/client/activities/model"

export default unary(pipe(
  poll$,
  asActivitiesListRequest
))
