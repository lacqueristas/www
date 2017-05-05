import {accountIncomingResource} from "@lacqueristas/resources"

import receiveResources from "../receiveResources"

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
      .then(receiveResources(accountIncomingResource))
  }
}
