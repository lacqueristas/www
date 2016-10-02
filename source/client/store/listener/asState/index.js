import {identity} from "ramda"
import {ifElse} from "ramda"
import {map} from "ramda"
import {merge} from "ramda"
import {pipe} from "ramda"
import {prop} from "ramda"

import asGraph from "./asGraph"
import indexById from "./indexById"
import groupByType from "./groupByType"

const dataline = pipe(
  // ie. {links: Object, data: [...], included: [...]}
  ifElse(prop("data"), pipe(indexById, groupByType), identity)
  // WORK: Add more layers to this
  // ie. {[type]: {[id]: {...}}, n}
)

// con. [{...}, {links, data, included}] -> {...}
export default (state, incoming) => {
  return merge(
    state,
    {
      resources: map(
        asGraph,
        merge(state.resources, dataline(incoming))
      )
    }
  )
}
