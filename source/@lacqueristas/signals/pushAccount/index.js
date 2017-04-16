import {created} from "httpstatuses"
import {omit} from "ramda"
import {account} from "@lacqueristas/resources"

export default function pushAccount (client: HSDKClientType): Function {
  return function pushAccountClient (attributes: FreshAccountAttributesType): Promise<AccountResourceType> {
    return client
      .accounts
      .v1
      .create({
        payload: {
          data: {
            type: "accounts",
            attributes,
          },
        },
      })
      .then(({data, status}: {data: JSONAPIResponse, status: number}): AccountResourceType => {
        switch (status) {
          case created: {
            return omit(["__abstraction__"], account(data.data))
          }
          default: {
            return Promise.reject(new Error("We received an unexpected status code from the server"))
          }
        }
      })
  }
}
