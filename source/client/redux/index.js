/* eslint-disable immutable/no-mutation, no-underscore-dangle  */
import {createStore} from "redux"
import {applyMiddleware} from "redux"
import {compose} from "redux"
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"

import reaction from "../reaction"
import initialState from "./initialState"

export default function redux ({client, history}) {
  if (process.env.NODE_ENV === "production") {
    return createStore(
      reaction,
      initialState(),
      applyMiddleware(
        thunkMiddleware.withExtraArgument({client})
      )
    )
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reaction,
    initialState(),
    composeEnhancers(applyMiddleware(
      thunkMiddleware.withExtraArgument({
        client,
        history,
      }),
      createLogger({
        duration: true,
        collapsed: true,
      })
    )
  ))
}
