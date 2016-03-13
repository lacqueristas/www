import {map} from "ramda"
import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "@cycle/dom"
import {makeHTTPDriver} from "@cycle/http"
import storageDriver from "@cycle/storage"

import {pollActivitiesList$} from "./activities/intent"
import {catchActivitiesList$} from "./activities/intent"
import {store$} from "./application/model"
import {asState} from "./application/model"
import {view} from "./application/presenter"

const main = (sources) => {
  const {
    dom,
    http,
    storage: {local}
  } = sources

  const http$ = Observable.merge(
    pollActivitiesList$(dom)
  )
  // We really only want to do this when a new catchActivitiesList$ event happens
  const storage$ = catchActivitiesList$(http).withLatestFrom(
    store$(local),
    asState
  )
  const dom$ = map(view, storage$)

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
