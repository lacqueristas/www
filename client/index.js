import {map} from "ramda"
import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "cycle-snabbdom"
import domProps from "snabbdom/modules/props"
import domAttributes from "snabbdom/modules/attributes"
import domStyle from "snabbdom/modules/style"
import {makeHTTPDriver} from "@cycle/http"

import {rerunner} from "cycle-restart"
import {restartable} from "cycle-restart"

import {pollActivitiesList$} from "./activities/intent"
import {pollAccountsList$} from "./accounts/intent"
import {state$} from "./application/intent"
import {layout} from "./application/presenter"

const main = (sources) => {
  const {http$$} = sources

  return {
    dom$: map(layout, state$(http$$)),
    http$$: Observable.merge(
      pollActivitiesList$(),
      pollAccountsList$()
    )
  }
}
const drivers = {
  dom$: restartable(makeDOMDriver(
    "body",
    {
      modules: [
        domProps,
        domAttributes,
        domStyle
      ]
    }
  ), {pauseSinksWhileReplaying: false}),
  http$$: restartable(makeHTTPDriver())
}
const rerun = rerunner(run)

rerun(main, drivers)

if (module.hot) {
  module.hot.accept("./client/accounts", () => {
    rerun(main, drivers)
  })
}
