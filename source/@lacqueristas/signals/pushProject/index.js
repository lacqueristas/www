import {projectIncomingResource} from "@lacqueristas/resources"

import receiveResources from "../receiveResources"

export default function pushProject (client) {
  return function pushProjectClient (bearer) {
    return function pushProjectClientBearer (attributes) {
      return client
        .projects
        .v1
        .create({
          authentication: {
            scheme: "bearer",
            secret: bearer,
          },
          payload: {
            data: {
              type: "projects",
              attributes,
            },
          },
        })
        .then(receiveResources(projectIncomingResource))
    }
  }
}
