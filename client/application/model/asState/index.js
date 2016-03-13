import {
  pipe,
  map,
  mergeAll,
  pluck,
  mergeWith,
  merge
} from "ramda"

const memberExtract = pipe(
  // {id, type, attributes: {summary}}
  (member) => ({[member.type]: 1})
)

const collectionExtract = pipe(
  // {data: [{id, type, attributes}, ...], included: [...]}
  pluck("data")
  // group by type?
  // [{id, type, attributes}, ...]
  //map(memberExtract),
  // [{activities: {1: {id, summary}, 2: {id, summary}, ...}}]
  //mergeAll
)
const extract = pipe(
  // [{data: [{id, type, attributes}, ...], included: [...]}]
  map(collectionExtract)
  // [{activity, activity, ...}, {account, account, ...}]
  //mergeAll
)
const mergeShallow = mergeWith(merge)

export default (payloads, store) => {
  return {
    key: "store",
    value: JSON.stringify({
      ...mergeShallow(JSON.parse(store), extract(payloads))
    })
  }
}
