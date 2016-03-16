import {
  map,
  pipe
} from "ramda"
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
import {view} from "./application/presenter"
import {asStore} from "./application/model"

const main = (sources) => {
  const {
    http,
    storage
  } = sources

  const http$ = Observable.merge(
    pollActivitiesList$()
  ).share()
  const signals$ = Observable.merge(
    catchActivitiesList$(http)
  ).share()

  const storage$ = state$([signals$, storage])
  const dom$ = map(pipe(asStore, view), storage$)

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
