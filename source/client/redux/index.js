/* eslint-disable immutable/no-mutation  */
import {createStore} from "redux"
import {applyMiddleware} from "redux"
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"

import history from "../history"
import reaction from "../reaction"
import initialState from "./initialState"

export default function redux ({client}) {
  if (process.env.NODE_ENV === "production") {
    return createStore(
      reaction,
      initialState(),
      applyMiddleware(
        thunkMiddleware.withExtraArgument({client})
      )
    )
  }

  return createStore(
    reaction,
    initialState(),
    applyMiddleware(
      thunkMiddleware.withExtraArgument({
        client,
        history,
      }),
      createLogger({
        duration: true,
        collapsed: true,
      })
    )
  )
}
