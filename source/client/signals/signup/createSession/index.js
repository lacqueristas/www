import {prop} from "ramda"
import {path} from "ramda"
import {asideP} from "ramda-extra"

import mergeResource from "../../mergeResource"
import storeToken from "../../storeToken"

export default function createSessions ({attributes, dispatch}) {
  const {email} = attributes
  const {password} = attributes

  return function createSessionsWithAttributes (client) {
    return client.sessions.v1.create({
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
      .then(prop("data"))
      .then(asideP(mergeResource, dispatch))
      .then(path(["data", "meta"]))
      .then(asideP(storeToken, dispatch))
  }
}
