import {pick} from "ramda"
import {photographIncomingResource} from "@internal/resources"

import receiveResources from "../receiveResources"

export default function pushPhotograph (client) {
  return function pushPhotographClient (bearer) {
    return function pushPhotographClientBearer (payload) {
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
