import {tapP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeCurrent from "../storeCurrent"

import pushAccount from "./pushAccount"
import pushSession from "./pushSession"

export default function signUp (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    return Promise
      .resolve(dispatch(startingRequest(slug)))
      .then((): any => pushAccount({
        attributes,
        client,
      }))
      .then(tapP(({data}: {data: any}): SignalType => dispatch(mergeResource(data))))
      .then((): any => pushSession({
        attributes,
        client,
      }))
      .then(tapP(({data}: {data: any}): SignalType => dispatch(mergeResource(data))))
      .then(tapP(({data}: {data: any}): SignalType => dispatch(storeSelf(data.data.id))))
      .then(tapP((): SignalType => dispatch(finishingRequest(slug))))
      .then(tapP((): SignalType => dispatch(clearForm(slug))))
      .then(tapP((): SignalType => dispatch(updateLocation("/front-page"))))
      .then((): SignalType => {
        return {
          type: "signUp",
          payload: slug,
        }
      })
  }
}
