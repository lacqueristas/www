import {sessionIncomingResource} from "@lacqueristas/resources"

import receiveResources from "../receiveResources"

export default function pushSession (client: HSDKClientType): Function {
  return function pushSessionClient (attributes: FreshSessionAttributesType): Promise<SessionResourceType> {
    const {email} = attributes
    const {password} = attributes

    return client
      .sessions
      .v1
      .create({
        payload: {
          data: {
            type: "sessions",
            attributes: {
              email,
              password,
            },
          },
        },
      })
      .then(receiveResources(sessionIncomingResource))
  }
}
