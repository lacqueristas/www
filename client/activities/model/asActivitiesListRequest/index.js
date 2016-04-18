import {map} from "ramda"

import {v1Activities} from "~/client/sdk"

export default map(v1Activities.list)
