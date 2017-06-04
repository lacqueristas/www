import {accountIncomingResource} from "@lacqueristas/resources"

import receiveResources from "../receiveResources"

export default function pushAccount (client) {
  return function pushAccountClient (attributes) {
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
