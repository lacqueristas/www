import {path} from "ramda"
import {tapP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"

import pushProject from "./pushProject"

export default function createProject (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const state = getState()
    const self = path(["ephemeral", "current", "self"], state)
    const session = path(["resources", "sessions", self], state)
    const attributes = path(["ephemeral", "forms", slug], state)

    return Promise
      .resolve(dispatch(startingRequest(slug)))
      .then((): any => pushProject({
        attributes,
        client,
        session,
      }))
      .then(tapP(({data}: {data: any}): SignalType => dispatch(mergeResource(data))))
      .then(tapP((): SignalType => dispatch(finishingRequest(slug))))
      .then(tapP((): SignalType => dispatch(clearForm(slug))))
      .then(tapP(({data}: {data: any}): SignalType => dispatch(updateLocation(`/projects/${data.id}`))))
      .then((): SignalType => {
        return {
          type: "signUp",
          payload: slug,
        }
      })
  }
}
