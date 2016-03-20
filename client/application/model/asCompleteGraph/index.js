import {
  prop,
  map,
  mergeAll,
  path,
  defaultTo
} from "ramda"

import associations from "../associations"

export default (state) => {
  return map(
    (collection) => {
      return map(
        (member) => {
          return {
            ...member,
            ...mergeAll(
              map(
                (relation) => {
                  const related = path([relation, "data"], member)
                  const id = path([relation, "data", "id"], member)
                  const type = path([relation, "data", "type"], member)
                  const associatedCollection = defaultTo({}, prop(type, state))
                  const association = defaultTo({}, prop(id, associatedCollection))

                  return {
                    [relation]: {
                      ...related,
                      ...association
                    }
                  }
                },
                defaultTo([], associations[member.type])
              )
            )
          }
        },
        collection
      )
    },
    state
  )
}
