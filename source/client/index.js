import "babel-polyfill"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"

import {Application} from "@lacqueristas/ui"
import {updateNavigationSignal} from "@lacqueristas/signals"
import {refreshResourcesSignal} from "@lacqueristas/signals"
import environment from "./environment"
import redux from "./redux"
import history from "./history"
import sdk from "./sdk"

const REFRESH_WAIT_TIME = 900000

window.env = environment(
  [...document.querySelectorAll("meta[type='environment']")]
)

sdk()
  .then((client: HSDKClienType): ReduxStoreType => redux({
    client,
    history,
  }))
  .then((store: ReduxStoreType): ReduxStoreType => {
    history.listen(function locationChange (next: LocationType, action: HistoryActionType): ?SignalType {
      if (action !== "PUSH") {
        return store.dispatch(updateNavigationSignal(next))
      }

      return null
    })

    return store
  })
  .then((store: ReduxStoreType): ReduxStoreType => {
    setInterval((): SignalType => store.dispatch(refreshResourcesSignal()), REFRESH_WAIT_TIME)

    return store
  })
  .then((store: ReduxStoreType): ReduxStoreType => {
    return render(
      <Provider store={store}>
        <Application />
      </Provider>,
      document.getElementById("application")
    )
  })
  .catch(console.error.bind(console))
