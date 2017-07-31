/* eslint-disable import/no-unassigned-import, no-unused-expressions, immutable/no-mutation, import/max-dependencies */
import "babel-polyfill"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import thenP from "@unction/thenp"
import catchP from "@unction/catchp"

import {Application} from "@internal/ui"
import {updateNavigationSignal} from "@internal/signals"
import {refreshResourcesSignal} from "@internal/signals"

import logger from "@internal/logger"

import environment from "./environment"
import redux from "./redux"
import history from "./history"
import sdk from "./sdk"

const REFRESH_WAIT_TIME = 900000

window.env = environment(
  [...document.querySelectorAll("meta[type='environment']")]
)
const application = document.getElementById("application")

sdk()
  | thenP((client) => redux({
    client,
    history,
  }))
  | thenP((store) => {
    history.listen(function locationChange (next, action) {
      if (action !== "PUSH") {
        store.dispatch(updateNavigationSignal(next))
      }
    })

    return store
  })
  | thenP((store) => {
    setInterval(() => store.dispatch(refreshResourcesSignal()), REFRESH_WAIT_TIME)

    return store
  })
  | thenP((store) => render(<Provider store={store}><Application /></Provider>, application))
  | catchP(logger.error)
