import {prop} from "ramda"
import {replace} from "ramda"
import {pipe} from "ramda"
import {aside} from "ramda-extra"
import store from "store"

import reactions from "@lacqueristas/reactions"

const defaultReaction = prop("state")
const signaledReaction = pipe(replace(/Signal$/)("Reaction"), prop)
const persist = aside(
  (value: any): any => store.set("state", value)
)

export default function reaction (state: StateType, signal: SignalType): StateType {
  const {type} = signal
  const {payload = {}} = signal
  const currentReaction = signaledReaction(type)(reactions) || defaultReaction
  const newState = currentReaction({
    state,
    payload,
  })
  const persistedState = persist(newState)


  return persistedState
}
