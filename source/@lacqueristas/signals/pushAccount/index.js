import {account} from "@lacqueristas/resources"

import dispatched from "../dispatched"
import receiveResources from "../receiveResources"
import exceptionSignal from "../exceptionSignal"

export default function pushAccount (client: HSDKClientType): Function {
  return function pushAccountClient (attributes: FreshAccountAttributesType): Promise<AccountResourceType> {
    return client
      .accounts
      .v1
      .create({
        payload: {
          data: {
            type: "accounts",
            attributes,
          },
        },
      })
      .then(receiveResources(account))
      .catch(dispatched(exceptionSignal))
  }
}
