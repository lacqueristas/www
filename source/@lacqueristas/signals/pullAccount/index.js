import {account} from "@lacqueristas/resources"

import dispatched from "../dispatched"
import receiveResources from "../receiveResources"
import exceptionSignal from "../exceptionSignal"

export default function pullAccount (client: HSDKClientType): Function {
  return function pullAccountClient (attributes: FreshAccountAttributesType): Promise<AccountResourceType> {
    const {id} = attributes

    return client
      .accounts
      .v1
      .show({id})
      .then(receiveResources(account))
      .catch(dispatched(exceptionSignal))
  }
}
