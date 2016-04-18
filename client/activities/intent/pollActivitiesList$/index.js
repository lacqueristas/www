import {Observable} from "rx"

import {asActivitiesListRequest} from "~/client/activities/model"

const INTERVAL = 1000

export default () => asActivitiesListRequest(Observable.interval(INTERVAL))
