import {
  map,
  unary
} from "ramda"
import {pipe} from "sanctuary"
import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "@cycle/dom"
import {makeHTTPDriver} from "@cycle/http"
import storageDriver from "@cycle/storage"

import {state$} from "./application/intent"
import {
  pollActivitiesList$,
  catchActivitiesList$
} from "./activities/intent"
import {
  pollAccountsList$,
  catchAccountsList$
} from "./accounts/intent"
import {asStore} from "./application/model"
import {layout} from "./application/presenter"

const main = (sources) => {
  const {
    http,
    storage
  } = sources

  const http$ = Observable.merge(
    pollActivitiesList$(),
    pollAccountsList$()
  ).share()
  const signals$ = Observable.merge(
    catchActivitiesList$(http),
    catchAccountsList$(http)
  ).share()
  const storage$ = state$([signals$, storage])
  const dom$ = map(unary(pipe([asStore, layout])), storage$)

  return {
    dom: dom$,
    http: http$,
    storage: storage$
  }
}

const drivers = {
  dom: makeDOMDriver("body"),
  http: makeHTTPDriver(),
  storage: storageDriver
}

run(main, drivers)
