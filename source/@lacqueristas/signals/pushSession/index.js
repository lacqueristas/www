import {session} from "@lacqueristas/resources"

import dispatched from "../dispatched"
import receiveResources from "../receiveResources"
import exceptionSignal from "../exceptionSignal"

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
      .then(receiveResources(session))
      .catch(dispatched(exceptionSignal))
  }
}
