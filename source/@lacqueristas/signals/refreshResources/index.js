import {ok} from "httpstatuses"
import {forEach} from "ramda"
import {omit} from "ramda"
import * as resources from "@lacqueristas/resources"

import mergeResource from "../mergeResource"

const MAPPING = {
  accounts: "account",
  sessions: "session",
  projects: "project",
}

export default function refreshResources (): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const state = getState()

    forEach((collection: Array<Promise<ResourceType>>) => {
      forEach((member: ResourceType) => {
        const {id} = member
        const {type} = member
        const {meta} = member
        const {version} = meta

        // TODO: Check for staleness instead of always refreshing
        if (id && type && version && client[type][version].show) {
          client[type][version]
            .show({id})
            .then(({data, status}: {data: JSONAPIResponse, status: number}): ResourceType => {
              const resource = resources[MAPPING[type]]

              switch (status) {
                case ok: {
                  return omit(["__abstraction__"], resource(data.data))
                }
                default: {
                  return Promise.reject(new Error("We received an unexpected status code from the server"))
                }
              }
            })
            .then((resource: ResourceType): SignalType => dispatch(mergeResource(resource)))
            .catch(console.error.bind(console))
        }
      }, collection)
    }, state.resources)

    return dispatch({type: "refreshResources"})
  }
}
