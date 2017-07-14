import {path} from "ramda"
import thenP from "@unction/thenp"
import allObjectP from "@unction/allobjectp"
import mapValues from "@unction/mapvalues"

import refreshMember from "./refreshMember"

export default function refreshResources () {
  return function thunk (dispatch, getState, {client}) {
    return getState()
      | path(["resources"])
      | mapValues(mapValues(refreshMember(dispatch)(client)))
      | allObjectP
      | thenP(() => dispatch({type: "refreshResources"}))
  }
}
