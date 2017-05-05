import {projectIncomingResource} from "@lacqueristas/resources"

import receiveResources from "../receiveResources"

export default function pushProject (client: HSDKClientType): Function {
  return function pushProjectClient (bearer: string): Function {
    return function pushProjectClientBearer (attributes: FreshProjectAttributesType): Promise<ProjectResourceType> {
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
