/* global localStorage */
import {map} from "ramda"
import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeDOMDriver} from "cycle-snabbdom"
import domProps from "snabbdom/modules/props"
import domAttributes from "snabbdom/modules/attributes"
import domStyle from "snabbdom/modules/style"
import {makeHTTPDriver} from "@cycle/http"
import storageDriver from "@cycle/storage"

import {pollActivitiesList$} from "./activities/intent"
import {catchActivitiesList$} from "./activities/intent"

import {pollAccountsList$} from "./accounts/intent"
import {catchAccountsList$} from "./accounts/intent"

import {read$} from "./application/intent"
import {write$} from "./application/intent"
import {layout} from "./application/presenter"

localStorage.clear()

const main = (sources) => {
  const {http$$} = sources
  const {storage$} = sources

  return {
    dom$: map(layout, read$(storage$)),
    http$$: Observable.merge(
      pollActivitiesList$(),
      pollAccountsList$()
    ).share(),
    storage$: write$([
      Observable.merge(
        catchActivitiesList$(http$$),
        catchAccountsList$(http$$)
      ),
      storage$
    ])
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
  http$$: makeHTTPDriver(),
  storage$: storageDriver
}

run(main, drivers)
