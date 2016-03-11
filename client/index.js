import {map} from "ramda"
import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "@cycle/dom"
import {makeHTTPDriver} from "@cycle/http"

import {pollActivitiesList$} from "./activities/intent"
import {catchActivitiesList$} from "./activities/intent"
import {state$} from "./application/model"
import {view} from "./application/presenter"

const main = (sources) => {
  const {
    DOM,
    HTTP
  } = sources


  const DOMView$ = map(view, state$(
    catchActivitiesList$(HTTP)
  ))

  const HTTP$ = Observable.merge(
    pollActivitiesList$(DOM)
  )

  return {
    DOM: DOMView$,
    HTTP: HTTP$
  }
}

const drivers = {
  DOM: makeDOMDriver("body"),
  HTTP: makeHTTPDriver()
}

run(main, drivers)
