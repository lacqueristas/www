import {createStore} from "redux"
import {applyMiddleware} from "redux"
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"
import hsdk from "hsdk"

import reaction from "../reaction"
import initialState from "./initialState"

const sdk = hsdk({
  protocol: "http",
  host: "192.168.99.100:3000",
  root: "v1/resources"
})

export default createStore(
  reaction,
  initialState(),
  applyMiddleware(
    thunkMiddleware.withExtraArgument({sdk}),
    createLogger({
      duration: true,
      collapsed: true
    })
  )
)
