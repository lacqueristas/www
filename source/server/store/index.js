import {createStore} from "redux"
import {applyMiddleware} from "redux"
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"

import initialState from "./initialState"

export default createStore(
  (state) => state,
  initialState(),
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      duration: true,
      collapsed: true
    })
  )
)
