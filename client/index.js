import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "@cycle/dom"
import {map} from "ramda"

import application from "./application"
import {count$, activities$} from "./streams"

const main = (sources) => {
  const {DOM} = sources
  const state$ = Observable.combineLatest(
    count$(DOM),
    activities$(),
    (count, activities) => {
      return {count, activities}
    }
  )
  const view = map((state) => application(state))

  return {
    DOM: view(state$)
  }
}

const drivers = {
  DOM: makeDOMDriver("body")
}

run(main, drivers)
