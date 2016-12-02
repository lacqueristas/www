import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"

import {Application} from "../components"
import store from "./store"
import {history} from "./history"
import * as signals from "./signals"

history.listen(function locationChange (next, action) {
  if (action !== "PUSH") {
    return store.dispatch(signals.updateNavigation(next))
  }

  return null
})

render(
  <Provider store={store}>
    <Application signals={signals} />
  </Provider>,
  document.getElementById("application")
)
