import {createStore} from "redux"
import {identity} from "ramda"

import initialState from "./initialState"

// TODO: Possibly use client redux style with a cache layer to create pre-populated data.
export default function redux (url) {
  return createStore(
    identity,
    initialState(url)
  )
}
