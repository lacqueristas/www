import {tapP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeSelf from "../storeSelf"

import pushAccount from "./pushAccount"
import pushSession from "./pushSession"

export default function signUp (slug: string): Function {
  return function thunk (dispatch: Function, getState: Function, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    return Promise
      .resolve(dispatch(startingRequest(slug)))
      .then((): any => {
        return pushAccount({
          attributes,
          client,
        })
      })
      .then(tapP(({data}: {data: any}): any => dispatch(mergeResource(data))))
      .then((): any => {
        return pushSession({
          attributes,
          client,
        })
      })
      .then(tapP(({data}: {data: any}): any => dispatch(mergeResource(data))))
      .then(tapP(({data}: {data: any}): any => dispatch(storeSelf({id: data.data.id}))))
      .then((): any => dispatch(finishingRequest({slug})))
      .then((): any => dispatch(clearForm("sign-up")))
      .then((): any => dispatch(updateLocation("/front-page")))
  }
}
