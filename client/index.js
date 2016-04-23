import {map} from "ramda"
import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "cycle-snabbdom"
import domProps from "snabbdom/modules/props"
import domAttributes from "snabbdom/modules/attributes"
import domStyle from "snabbdom/modules/style"
import {makeHTTPDriver} from "@cycle/http"

import {pollActivitiesList$} from "./activities/intent"
import {catchActivitiesList$} from "./activities/intent"

import {pollAccountsList$} from "./accounts/intent"
import {catchAccountsList$} from "./accounts/intent"

import {asState} from "./application/model"
import {initialState} from "./application/model"
import {layout} from "./application/presenter"

const main = (sources) => {
  const {http$$} = sources
  // const {dom$} = sources

  // dom$
  //   .select("body [data-influx]")
  //   .observable
  //   .forEach((x) => console.log(x))
  const state$ = Observable
    .merge(
      catchActivitiesList$(http$$),
      catchAccountsList$(http$$)
    )
    .startWith({})
    .scan(asState, initialState())
    .do((x) => console.dir(x))

  return {
    dom$: map(layout, state$),
    http$$: Observable.merge(
      pollActivitiesList$(),
      pollAccountsList$()
    )
  }
}

const drivers = {
  dom$: makeDOMDriver(
    "body",
    {
      modules: [
        domProps,
        domAttributes,
        domStyle
      ]
    }
  ),
  http$$: makeHTTPDriver()
}

run(main, drivers)
