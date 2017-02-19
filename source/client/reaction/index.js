import {prop} from "ramda"
import {aside} from "ramda-extra"
import {curry} from "ramda"
import {set} from "store"

import mergeResource from "./mergeResource"
import updateInput from "./updateInput"
import updateNavigation from "./updateNavigation"
import clearForm from "./clearForm"
import storeSelf from "./storeSelf"

const defaultReaction = prop("state")
const trailing = aside(
  curry(set)("state")
)

export const events = {
  mergeResource,
  updateInput,
  clearForm,
  storeSelf,
  updateNavigation,
}
export default function reaction (state, signal) {
  const {type} = signal
  const {payload = {}} = signal
  const currentReaction = events[type] || defaultReaction

  return trailing(currentReaction({
    state,
    payload,
  }))
}
