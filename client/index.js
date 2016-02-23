import {
  Observable
} from "rx"
import {
  pipe,
  map,
  path,
  filter,
  equals,
  prop,
  defaultTo
} from "ramda"
import {
  run
} from "@cycle/core"
import {
  makeDOMDriver
} from "@cycle/dom"
import {
  makeHTTPDriver
} from "@cycle/http"

import application from "./application"
import {
  activitiesList
} from "./sdk"
import {
  ACTIVITIES_LIST_URL
} from "./sdk/activities"

const main = ({
  DOM,
  HTTP
}) => {
  const MINIMUM_POLL = 1000

  // intent
  const click$ = (dom$) => dom$.events("click")
  const fetchLatestActivitiesButton$ = (dom$) => dom$.select("#fetchLatestActivities")
  const fetchLatestActivitiesButtonClick$ = pipe(
    fetchLatestActivitiesButton$,
    click$
  )
  const matchesActivitiesList = pipe(
    path(["request", "url"]),
    equals(ACTIVITIES_LIST_URL)
  )
  const response$ = (HTTP$$) => HTTP$$.switch()
  const poll$ = () => Observable.interval(MINIMUM_POLL)

  // model
  const onlyActivitiesList = filter(matchesActivitiesList)
  const asActivitiesListRequest = map(activitiesList)
  const asPayload = pipe(
    prop("text"),
    JSON.parse,
    defaultTo({})
  )
  const asActivities = pipe(
    prop("data"),
    defaultTo([])
  )
  const fetchLatestActivities$ = pipe(
    fetchLatestActivitiesButtonClick$,
    asActivitiesListRequest
  )
  const pollLatestActivities$ = pipe(
    poll$,
    asActivitiesListRequest
  )
  const catchActivitiesList$ = pipe(
    onlyActivitiesList,
    response$,
    map(asPayload),
    map(asActivities)
  )
  const HTTPRemote$ = Observable.merge(
    fetchLatestActivities$(DOM),
    pollLatestActivities$()
  )
  const state$ = Observable.combineLatest(
    catchActivitiesList$(HTTP),
    (activities) => ({activities})
  ).startWith({
    activities: []
  })

  // view
  const DOMView$ = map(application)(state$)

  return {
    DOM: DOMView$,
    HTTP: HTTPRemote$
  }
}

const drivers = {
  DOM: makeDOMDriver("body"),
  HTTP: makeHTTPDriver()
}

run(main, drivers)
