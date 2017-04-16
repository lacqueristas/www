/* eslint-disable no-underscore-dangle  */
import {createStore} from "redux"
import {applyMiddleware} from "redux"
import {compose} from "redux"
import logger from "redux-logger"
import thunkMiddleware from "redux-thunk"

import reaction from "./reaction"
import initialState from "./initialState"

export default function redux ({client, history}: {client: HSDKClientType, history: HistoryType}): any {
  if (process.env.NODE_ENV === "production") {
    const middleware = applyMiddleware(
      thunkMiddleware.withExtraArgument({
        client,
        history,
      })
    )

    return createStore(
      reaction,
      initialState(),
      middleware
    )
  }
  const middleware = applyMiddleware(
    thunkMiddleware.withExtraArgument({
      client,
      history,
    }),
    logger
  )
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reaction,
    initialState(),
    composeEnhancers(middleware)
  )
}
