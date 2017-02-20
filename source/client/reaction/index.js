import {prop} from "ramda"
import {curry} from "ramda"
import {aside} from "ramda-extra"
import {set} from "store"

import events from "./events"

const defaultReaction = prop("state")
const persist = aside(
  curry(set)("state")
)

export default function reaction (state, signal) {
  const {type} = signal
  const {payload = {}} = signal
  const currentReaction = events[type] || defaultReaction

  const newState = currentReaction({
    state,
    payload,
  })
  const persistedState = persist(newState)


  return persistedState
}
