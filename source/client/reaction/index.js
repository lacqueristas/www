import {prop} from "ramda"
import {curry} from "ramda"
import {aside} from "ramda-extra"
import {set} from "store"

import reactions from "@lacqueristas/reactions"

const defaultReaction = prop("state")
const persist = aside(
  curry(set)("state")
)

type StateType = {
  resources: any,
  ephemeral: any,
  navigation: any,
}

type SignalType = {
  type: string,
  payload: any,
}

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
