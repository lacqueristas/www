import {createSelector} from "reselect"
import {unapply} from "ramda"
import {mergeAll} from "ramda"

export default function query (queries) {
  return createSelector(
    ...queries,
    unapply(mergeAll)
  )
}
