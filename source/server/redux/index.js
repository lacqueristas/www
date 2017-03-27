import {createStore} from "redux"
import {identity} from "ramda"

import initialState from "./initialState"

export default createStore(
  identity,
  initialState()
)
