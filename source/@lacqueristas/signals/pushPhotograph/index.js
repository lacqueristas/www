import {pick} from "ramda"
import {photographIncomingResource} from "@lacqueristas/resources"

import receiveResources from "../receiveResources"

type PhotographPayloadType = {
  projectId: string,
  original: string,
  thumbnail: string,
}

export default function pushPhotograph (client: HSDKClientType): Function {
  return function pushPhotographClient (bearer: string): Function {
    return function pushPhotographClientBearer (payload: PhotographPayloadType): Promise<PhotographResourceType> {
      const {project} = payload
      const {original} = payload
      const {thumbnail} = payload

      return client
        .photographs
        .v1
        .create({
          authentication: {
            scheme: "bearer",
            secret: bearer,
          },
          payload: {
            data: {
              type: "photographs",
              attributes: {
                original,
                thumbnail,
              },
              relationships: {project: {data: pick(["id", "type"], project)}},
            },
          },
        })
        .then(receiveResources(photographIncomingResource))
    }
  }
}
