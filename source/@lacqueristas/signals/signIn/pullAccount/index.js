import {ok} from "httpstatuses"
import {omit} from "ramda"
import {account} from "@lacqueristas/resources"

export default function pullAccount (client: HSDKClientType): Function {
  return function pullAccountClient (attributes: FreshAccountAttributesType): Promise<AccountResourceType> {
    const {id} = attributes

    return client
      .accounts
      .v1
      .show({id})
      .then(({data, status}: {data: JSONAPIResponse, status: number}): AccountResourceType => {
        switch (status) {
          case ok: {
            return omit(["__abstraction__"], account(data.data))
          }
          default: {
            return Promise.reject(new Error("We received an unexpected status code from the server"))
          }
        }
      })
  }
}
