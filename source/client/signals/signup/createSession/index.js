import {prop} from "ramda"
import {asideP} from "ramda-extra"

import mergeResource from "../../mergeResource"
import storeSelf from "../../storeSelf"

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
      .then(asideP(({data}) => ({id: data.id}), storeSelf, dispatch))
  }
}
