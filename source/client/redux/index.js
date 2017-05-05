/* eslint-disable no-underscore-dangle  */
import {createStore} from "redux"
import {applyMiddleware} from "redux"
import {compose} from "redux"
import logger from "redux-logger"
import thunkMiddleware from "redux-thunk"

import reaction from "./reaction"
import initialState from "./initialState"

type ReduxExtraType = {
  client: HSDKClientType,
  history: HistoryType,
}

export default function redux (extra: ReduxExtraType): any {
  const thunk = thunkMiddleware.withExtraArgument(extra)

  if (process.env.NODE_ENV === "production") {
    return createStore(
      reaction,
      initialState(),
      applyMiddleware(
        thunk
      )
    )
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reaction,
    initialState(),
    composeEnhancers(applyMiddleware(
      thunk,
      logger,
    ))
  )
}
