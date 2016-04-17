import {map} from "ramda"

import {v1Accounts} from "~/client/sdk"

export default map(v1Accounts.list)
