import {prop} from "ramda"
import {pipe} from "ramda"
import {path} from "ramda"
import resolveP from "@unction/resolvep"
import * as resources from "@lacqueristas/resources"

import mergeResourceSignal from "../../mergeResourceSignal"
import receiveResources from "../../receiveResources"
import exceptionSignal from "../../exceptionSignal"

const MAPPING = {
  accounts: "accountIncomingResource",
  sessions: "sessionIncomingResource",
  projects: "projectIncomingResource",
}

export default function refreshMember (dispatch: ReduxDispatchType): Function {
  return function refreshMemberDispatch (client: HSDKClientType): Function {
    return function refreshMemberClient (member: ResourceType): Promise<any> {
      const {id} = member
      const {type} = member
      const {meta} = member
      const {version} = meta
      const show = path([type, version, "show"])(client)

      // TODO: Check for staleness instead of always refreshing
      if (id && type && show) {
        const abstraction = prop(prop(type)(MAPPING))(resources)

        return show({id})
          .then(receiveResources(abstraction))
          .then((resource: ResourceType): SignalType => dispatch(mergeResourceSignal(resource)))
          .catch(pipe(exceptionSignal, dispatch))
      }

      return resolveP(false)
    }
  }
}
