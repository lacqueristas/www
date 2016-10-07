import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import createHistory from "history/createBrowserHistory"

import {Application} from "../server/components"
import store from "./store"

const history = createHistory()

history.listen(function locationChange () {
  return store.dispatch({type: "NAVIGATE", payload: {location}})
})

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("application")
)
