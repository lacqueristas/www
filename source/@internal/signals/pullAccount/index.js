import {accountIncomingResource} from "@internal/resources"

import receiveResources from "../receiveResources"

export default function pullAccount (client) {
  return function pullAccountClient (attributes) {
    const {id} = attributes

    return client
      .accounts
      .v1
      .show({id})
      .then(receiveResources(accountIncomingResource))
  }
}
