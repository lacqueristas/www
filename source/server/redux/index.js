import {createStore} from "redux"
import {applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"

import initialState from "./initialState"

export default createStore(
  (state: object): object => state,
  initialState(),
  applyMiddleware(
    thunkMiddleware,
  )
)
