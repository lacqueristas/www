import {created} from "httpstatuses"
import {omit} from "ramda"
import {pick} from "ramda"
import {photographIncomingResource} from "@lacqueristas/resources"

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
      .then(({data, status}: {data: JSONAPIResponse, status: number}): PhotographResourceType => {
        switch (status) {
          case created: {
            return omit(["__abstraction__"], photographIncomingResource(data.data))
          }
          default: {
            return Promise.reject(new Error("We received an unexpected status code from the server"))
          }
        }
      })
    }
  }
}
