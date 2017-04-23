import {map} from "ramda"
import {prop} from "ramda"
import allP from "@unction/allp"

import refreshMember from "./refreshMember"

export default function refreshResourcesSignal (): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    return allP(
      map((collection: Array<Promise<ResourceType>>): Array<Promise<any>> => allP(map(refreshMember(dispatch)(client))(collection))(prop("resources")(getState())))
    )
    .then((): SignalType => dispatch({type: "refreshResourcesSignal"}))
  }
}
