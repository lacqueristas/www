import {created} from "httpstatuses"
import {omit} from "ramda"
// import {project} from "@lacqueristas/resources"

export default function pushProject (client: HSDKClientType): Function {
  return function pushProjectClient ({attributes, bearer}: {attributes: FreshProjectAttributesType}): Promise<ProjectResourceType> {
    return client
      .projects
      .v1
      .create({
        authentication: {
          scheme: "bearer",
          bearer,
        },
        payload: {
          data: {
            type: "projects",
            attributes,
          },
        },
      })
      .then(({data, status}: {data: JSONAPIResponse, status: number}): ProjectResourceType => {
        switch (status) {
          case created: {
            return omit(["__abstraction__"], project(data.data))
          }
          default: {
            return Promise.reject(new Error("We received an unexpected status code from the server"))
          }
        }
      })
  }
}
