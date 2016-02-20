import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "@cycle/dom"
import {
  map,
  pipe
} from "ramda"

import application from "./application"

const main = (sources) => {
  const {DOM} = sources

  const INITIAL_VALUE = 0
  const STEP = 1
  const PHASE_ONE_MINIMUM = 15
  const PHASES = [
    PHASE_ONE_MINIMUM
  ]

  // DOM intent
  const clickEvent$ = (DOM$) => DOM$.events("click")

  // Counter Intents
  const upButton$ = (DOM$) => DOM$.select(".up")

  // ???
  const asIncrement$ = map(() => +Number(STEP))

  // ??
  const increment$ = pipe(upButton$, clickEvent$, asIncrement$)

  // ??
  const sum$ = (previous, current) => previous + current

  // ??
  const count$ = (DOM$) => {
    return Observable.of(INITIAL_VALUE)
      .merge(increment$(DOM$))
      .scan(sum$)
  }

  const state$ = Observable.combineLatest(
    count$(DOM),
    (count) => ({count, phases: PHASES})
  )
  const view$ = map((state) => application(state))

  const DOM$ = view$(state$)

  return {
    DOM: DOM$
  }
}

const drivers = {
  DOM: makeDOMDriver("body")
}

run(main, drivers)
