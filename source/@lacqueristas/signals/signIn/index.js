import {tapP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeSelf from "../storeSelf"

import pullAccount from "./pullAccount"
import pushSession from "./pushSession"

export default function signIn ({slug}) {
  return function thunk (dispatch: ReduxDispatchType, getState: Function, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const {ephemeral} = getState()
    const {forms} = ephemeral
    const attributes = forms[slug]

    return Promise
      .resolve(dispatch(startingRequest({slug})))
      .then(() => {
        return pushSession({
          attributes,
          client,
        })
      })
      .then(tapP(({data}) => dispatch(mergeResource(data))))
      .then(tapP(({data}) => dispatch(storeSelf({id: data.data.id}))))
      .then(({data}) => {
        return pullAccount({
          attributes: data.data.relationships.account.data,
          client,
        })
      })
      .then(tapP(({data}) => dispatch(mergeResource(data))))
      .then(() => dispatch(finishingRequest({slug})))
      .then(() => dispatch(clearForm("sign-up")))
      .then(() => dispatch(updateLocation("/front-page")))
  }
}
