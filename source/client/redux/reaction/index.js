import {prop} from "ramda"
import {replace} from "ramda"
import {pipe} from "ramda"
import reactions from "@internal/reactions"

import persist from "./persist"

const defaultReaction = (state) => () => state
const signaledReaction = pipe(replace(/Signal$/)("Reaction"), prop)

export default function reaction (state, signal) {
  const {type} = signal
  const {payload = {}} = signal
  const currentReaction = signaledReaction(type)(reactions) || defaultReaction

  return persist(currentReaction(state)(payload))
}
