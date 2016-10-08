import {createStore} from "redux"
import {applyMiddleware} from "redux"
import createLogger from "redux-logger"

import listener from "./listener"
import {initialState} from "./listener"

export default createStore(listener, initialState, applyMiddleware(createLogger()))
