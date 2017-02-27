import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {tapP} from "ramda-extra"

import {Application} from "@lacqueristas/ui"
import environment from "./environment"
import redux from "./redux"
import history from "./history"
import * as signals from "@lacqueristas/signals"
import sdk from "./sdk"

window.env = environment(
  [...document.querySelectorAll("meta[type='environment']")]
)

sdk()
  .then((client) => {
    return redux({client})
  })
  .then(tapP((store) => {
    history.listen(function locationChange (next, action) {
      if (action !== "PUSH") {
        return store.dispatch(signals.updateNavigation(next))
      }

      return null
    })
  }))
  .then(tapP((store) => {
    setInterval(() => store.dispatch(signals.refreshResources()), 25000)

    return store.dispatch(signals.refreshResources())
  }))
  .then((store) => {
    return render(
      <Provider store={store}>
        <Application signals={signals} />
      </Provider>,
      document.getElementById("application")
    )
  })
