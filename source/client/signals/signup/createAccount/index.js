import {prop} from "ramda"
import {aside} from "ramda-extra"

import mergeResource from "../../mergeResource"

export default function createAccount ({attributes, dispatch}) {
  const {name} = attributes
  const {email} = attributes
  const {password} = attributes

  return function createAccountWithAttributes (client) {
    return client.accounts.v1.create({
      payload: {
        data: {
          type: "accounts",
          attributes: {
            name,
            email,
            password
          }
        }
      }
    })
      .then(prop("data"))
      .then(aside(mergeResource, dispatch))
  }
}
