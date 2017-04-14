import {pipe} from "ramda"
import {map} from "ramda"
import {flatten} from "ramda"

import updateInput from "../updateInput"
import errorInput from "../errorInput"
import asPayload from "./asPayload"

type UpdateFilesPayloadType = {
  slug: string,
  name: string,
  accepted: Array<any>,
  rejected: Array<any>,
}

export default function updateFiles ({slug, name, accepted, rejected}: UpdateFilesPayloadType): SignalType {
  return function thunk (dispatch: ReduxDispatchType): Promise<SignalType> {
    const accepts = map(pipe(asPayload(slug)(name), updateInput, dispatch), accepted)
    const rejects = map(pipe(asPayload(slug)(name), errorInput, dispatch), rejected)

    return Promise
      .all(
        flatten(
          [
            accepts,
            rejects,
          ]
        )
      )
      .then((): SignalType => dispatch({type: "updateFiles"}))
  }
}
