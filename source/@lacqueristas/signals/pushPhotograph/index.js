import {created} from "httpstatuses"
import {omit} from "ramda"
import {photograph} from "@lacqueristas/resources"

export default function pushProject (client: HSDKClientType): Function {
  return function pushProjectClient ({attributes, bearer}: {attributes: FreshPhotographAttributesType}): Promise<PhotographResourceType> {
    return client
      .photographs
      .v1
      .create({
        authentication: {
          scheme: "bearer",
          bearer,
        },
        payload: {
          data: {
            type: "photographs",
            attributes,
          },
        },
      })
      .then(({data, status}: {data: JSONAPIResponse, status: number}): PhotographResourceType => {
        switch (status) {
          case created: {
            return omit(["__abstraction__"], photograph(data.data))
          }
          default: {
            return Promise.reject(new Error("We received an unexpected status code from the server"))
          }
        }
      })
  }
}
