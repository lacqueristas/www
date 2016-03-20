import {
  map,
  unary
} from "ramda"

import {activitiesList} from "~/client/sdk"

export default map(unary(activitiesList))
