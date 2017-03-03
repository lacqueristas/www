import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"

import {Application} from "@lacqueristas/ui"
import * as signals from "@lacqueristas/signals"
import environment from "./environment"
import redux from "./redux"
import history from "./history"
import sdk from "./sdk"

window.env = environment(
  [...document.querySelectorAll("meta[type='environment']")]
)

sdk()
  .then((client) => redux({
    client,
    history,
  }))
  .then((store) => {
    history.listen(function locationChange (next, action) {
      if (action !== "PUSH") {
        return store.dispatch(signals.updateNavigation(next))
      }

      return null
    })

    return store
  })
  .then((store) => {
    setInterval(() => store.dispatch(signals.refreshResources()), 25000)

    store.dispatch(signals.refreshResources())

    return store
  })
  .then((store) => {
    return render(
      <Provider store={store}>
        <Application signals={signals} />
      </Provider>,
      document.getElementById("application")
    )
  })
