/* global localStorage */
import {map} from "ramda"

import {Observable} from "rx"

import {run} from "@cycle/core"
import {makeDOMDriver} from "@cycle/dom"
import {makeHTTPDriver} from "@cycle/http"
import storageDriver from "@cycle/storage"

import {pollActivitiesList$} from "./activities/intent"
import {catchActivitiesList$} from "./activities/intent"

import {pollAccountsList$} from "./accounts/intent"
import {catchAccountsList$} from "./accounts/intent"

import {asStore} from "./application/model"
import {write$} from "./application/intent"
import {layout} from "./application/presenter"

localStorage.clear()

const main = (sources) => {
  const {http} = sources
  const {storage} = sources

  const signals$ = Observable.merge(
    catchActivitiesList$(http),
    catchAccountsList$(http)
  ).share()

  const store$ = storage.local.getItem("store").distinct()

  const states$ = map(asStore, store$)

  return {
    dom: map(layout, states$),
    http: Observable.merge(
      pollActivitiesList$(),
      pollAccountsList$()
    ).share(),
    storage: write$([signals$, storage])
  }
}

const drivers: Object = {
  dom: makeDOMDriver("body"),
  http: makeHTTPDriver(),
  storage: storageDriver
}

run(main, drivers)
