import {accountIncomingResource} from "@lacqueristas/resources"

import receiveResources from "../receiveResources"

export default function pullAccount (client: HSDKClientType): Function {
  return function pullAccountClient (attributes: FreshAccountAttributesType): Promise<AccountResourceType> {
    const {id} = attributes

    return client
      .accounts
      .v1
      .show({id})
      .then(receiveResources(accountIncomingResource))
  }
}
