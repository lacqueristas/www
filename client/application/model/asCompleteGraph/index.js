import {
  prop,
  map,
  mergeAll,
  defaultTo
} from "ramda"

import associations from "../associations"

export default (state: Object) => {
  return map(
    (collection: Object) => {
      return map(
        (member: Object) => {
          return {
            ...member,
            ...mergeAll(
              map(
                (relation: string) => {
                  const related: Object = prop(relation, member)
                  const id: string = prop("id", related)
                  const type: string = prop("type", related)
                  const associatedCollection: Object = defaultTo({}, prop(type, state))
                  const association: Object = defaultTo({}, prop(id, associatedCollection))

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
