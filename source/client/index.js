import "babel-polyfill"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"

import {Application} from "@internal/ui"
import {updateNavigationSignal} from "@internal/signals"
import {refreshResourcesSignal} from "@internal/signals"
import environment from "./environment"
import redux from "./redux"
import history from "./history"
import sdk from "./sdk"

const REFRESH_WAIT_TIME = 900000

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
        return store.dispatch(updateNavigationSignal(next))
      }

      return null
    })

    return store
  })
  .then((store) => {
    setInterval(() => store.dispatch(refreshResourcesSignal()), REFRESH_WAIT_TIME)

    return store
  })
  .then((store) => {
    return render(
      <Provider store={store}>
        <Application />
      </Provider>,
      document.getElementById("application")
    )
  })
  .catch(console.error.bind(console))
