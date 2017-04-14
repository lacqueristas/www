import {created} from "httpstatuses"
import {omit} from "ramda"
import {session} from "@lacqueristas/resources"

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
      .then(({data, status}: {data: JSONAPIResponse, status: number}): SessionResourceType => {
        switch (status) {
          case created: {
            return omit(["__abstraction__"], session(data.data))
          }
          default: {
            return Promise.reject(new Error("We received an unexpected status code from the server"))
          }
        }
      })
  }
}
