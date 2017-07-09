import {pipe} from "ramda"
import {prop} from "ramda"
import allObjectP from "@unction/allobjectp"
import mapValues from "@unction/mapvalues"

import refreshMember from "./refreshMember"

export default function refreshResourcesSignal () {
  return function thunk (dispatch, getState, {client}: {client) {
    const refresh = pipe(mapValues(mapValues(refreshMember(dispatch)(client))), allObjectP)

    return allObjectP(refresh(prop("resources")(getState())))
      .then(()=> dispatch({type: "refreshResourcesSignal"}))
  }
}
