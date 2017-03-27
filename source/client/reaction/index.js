import {prop} from "ramda"
import {curry} from "ramda"
import {aside} from "ramda-extra"
import {set} from "store"

import reactions from "@lacqueristas/reactions"

const defaultReaction = prop("state")
const persist = aside(
  curry(set)("state")
)

export default function reaction (state: StateType, signal: SignalType): StateType {
  const {type} = signal
  const {payload = {}} = signal
  const currentReaction: Function = reactions[type] || defaultReaction
  const newState = currentReaction({
    state,
    payload,
  })
  const persistedState = persist(newState)


  return persistedState
}
