import {prop} from "ramda"
import {replace} from "ramda"
import {pipe} from "ramda"
import reactions from "@lacqueristas/reactions"

import persist from "./persist"

const defaultReaction = prop("state")
const signaledReaction = pipe(replace(/Signal$/)("Reaction"), prop)

export default function reaction (state: StateType, signal: SignalType): StateType {
  const {type} = signal
  const {payload = {}} = signal
  const currentReaction = signaledReaction(type)(reactions) || defaultReaction

  return persist(currentReaction({
    state,
    payload,
  }))
}
