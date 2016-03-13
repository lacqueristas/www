import {
  map,
  pipe
} from "ramda"
import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "@cycle/dom"
import {makeHTTPDriver} from "@cycle/http"
import storageDriver from "@cycle/storage"

import {pollActivitiesList$} from "./activities/intent"
import {catchActivitiesList$} from "./activities/intent"
import {read$} from "./application/intent"
import {asLocalStorageInsert} from "./application/model"
import {asStore} from "./application/model"
import {view} from "./application/presenter"

const main = (sources) => {
  const {
    http,
    storage
  } = sources

  const http$ = Observable.merge(
    pollActivitiesList$()
  )
  const signals$ = Observable.merge(
    catchActivitiesList$(http)
  )
  const storage$ = signals$
    .withLatestFrom(
      read$(storage),
      asLocalStorageInsert
    )
    .startWith({key: "store", value: JSON.stringify({})})
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
