import {createStore} from "redux"
import {applyMiddleware} from "redux"
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"
import hsdk from "hsdk"
import {reduce} from "ramda"

import reaction from "../reaction"
import initialState from "./initialState"

window.env = reduce(
  (previous, element) => {
    if (element.getAttribute("type") !== "environment") {
      return previous
    }

    return {
      ...previous,
      [element.getAttribute("name")]: element.getAttribute("content")
    }
  },
  document.getElementsByTagName("meta")
)

const sdk = hsdk({home: `${window.env.ORIGIN_LOCATION}/v1/resources`})

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
