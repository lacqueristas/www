import {
  pipe,
  map
} from "ramda"

import {onlyActivitiesListResponse$$} from "~/client/activities/model"
import {selectResponse$} from "~/client/application/intent"
import {asPayload} from "~/client/application/model"

export default pipe(
  onlyActivitiesListResponse$$,
  selectResponse$,
  map(asPayload)
)
