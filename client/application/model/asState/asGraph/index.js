import {defaultTo} from "ramda"
import {map} from "ramda"
import {mergeAll} from "ramda"
import {prop} from "ramda"

const associations = {
  activities: [],
  accounts: []
}

// con. {...} -> {...}
// ie. {[type]: { [id]: {...}, n}, n}
export default (resources) => {
  return map(
    (collection) => {
      return map(
        (member) => {
          return {
            ...member,
            ...mergeAll(
              map(
                (relation) => {
                  const related = prop(relation, member)
                  const id = prop("id", related)
                  const type = prop("type", related)
                  const associatedCollection = defaultTo({}, prop(type, resources))
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
    resources
  )
}
