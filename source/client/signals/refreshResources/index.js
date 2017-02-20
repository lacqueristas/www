import {map} from "ramda"

import mergeResource from "../mergeResource"

export default function refreshResources () {
  return function thunk (dispatch, getState, {client}) {
    const state = getState()

    map((collection) => {
      map((member) => {
        const {id} = member
        const {type} = member
        const {meta} = member
        const {version} = meta

        // TODO: Check for staleness instead of always refreshing
        if (id && type && version && client[type][version].show) {
          return client[type][version]
            .show({id})
            .then(({data}) => dispatch(mergeResource(data)))
        }

        return member
      }, collection)
    }, state.resources)
  }
}
