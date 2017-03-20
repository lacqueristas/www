import {tapP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeSelf from "../storeSelf"

import pullAccount from "./pullAccount"
import pushSession from "./pushSession"

export default function signIn (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: Function, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    return Promise
      .resolve(dispatch(startingRequest(slug)))
      .then((): any => pushSession({
        attributes,
        client,
      }))
      .then(tapP(({data}: {data: any}): SignalType => dispatch(mergeResource(data))))
      .then(tapP(({data}: {data: any}): SignalType => dispatch(storeSelf({id: data.data.id}))))
      .then(({data}: {data: any}): any => pullAccount({
        attributes: data.data.relationships.account.data,
        client,
      }))
      .then(tapP(({data}: {data: any}): SignalType => dispatch(mergeResource(data))))
      .then((): SignalType => dispatch(finishingRequest(slug)))
      .then((): SignalType => dispatch(clearForm("sign-up")))
      .then((): SignalType => dispatch(updateLocation("/front-page")))
      .then((): SignalType => {
        return {
          type: "signIn",
          payload: slug,
        }
      })
  }
}
