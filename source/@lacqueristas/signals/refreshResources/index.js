import {map} from "ramda"

import mergeResource from "../mergeResource"

export default function refreshResources (): Function {
  return function thunk (dispatch: DispatchType, getState: Function, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const state = getState()

    map((collection: Array<any>) => {
      map((member: any): any => {
        const {id} = member
        const {type} = member
        const {meta} = member
        const {version} = meta

        // TODO: Check for staleness instead of always refreshing
        if (id && type && version && client[type][version].show) {
          return client[type][version]
            .show({id})
            .then(({data}: {data: any}): SignalType => dispatch(mergeResource(data)))
        }

        return member
      }, collection)
    }, state.resources)
  }
}
