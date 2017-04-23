import {project} from "@lacqueristas/resources"

import dispatched from "../dispatched"
import receiveResources from "../receiveResources"
import exceptionSignal from "../exceptionSignal"

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
        .then(receiveResources(project))
        .catch(dispatched(exceptionSignal))
    }
  }
}
