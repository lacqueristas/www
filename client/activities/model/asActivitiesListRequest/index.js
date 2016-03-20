import {
  map,
  unary
} from "ramda"

import activitiesList from "~/client/sdk/activities/list"

export default map(unary(activitiesList))
