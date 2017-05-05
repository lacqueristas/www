import {pipe} from "ramda"
import {prop} from "ramda"
import allObjectP from "@unction/allobjectp"
import mapValues from "@unction/mapvalues"

import refreshMember from "./refreshMember"

export default function refreshResourcesSignal (): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const refresh = pipe(mapValues(mapValues(refreshMember(dispatch)(client))), allObjectP)

    return allObjectP(refresh(prop("resources")(getState())))
      .then((): SignalType => dispatch({type: "refreshResourcesSignal"}))
  }
}
