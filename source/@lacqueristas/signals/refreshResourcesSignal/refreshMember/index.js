import {prop} from "ramda"
import resolveP from "@unction/resolvep"
import * as resources from "@lacqueristas/resources"


import dispatched from "../../dispatched"
import mergeResourceSignal from "../../mergeResourceSignal"
import receiveResources from "../../receiveResources"
import exceptionSignal from "../../exceptionSignal"

const MAPPING = {
  accounts: "account",
  sessions: "session",
  projects: "project",
}

export default function refreshMember (dispatch: ReduxDispatchType): Function {
  return function refreshMemberDispatch (client: HSDKClientType): Function {
    return function refreshMemberClient (member: ResourceType): Promise<any> {
      const {id} = member
      const {type} = member
      const {meta} = member
      const {version} = meta

      // TODO: Check for staleness instead of always refreshing
      if (id && type && version && client[type][version].show) {
        const abstraction = prop(prop(type)(MAPPING))(resources)

        return client[type][version]
          .show({id})
          .then(receiveResources(abstraction))
          .then((resource: ResourceType): SignalType => dispatch(mergeResourceSignal(resource)))
          .catch(dispatched(exceptionSignal))
      }

      return resolveP(false)
    }
  }
}
