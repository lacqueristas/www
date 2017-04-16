import {pipe} from "ramda"
import {map} from "ramda"
import {flatten} from "ramda"

import updateInputSignal from "../updateInputSignal"
import errorInputSignal from "../errorInputSignal"
import asPayload from "./asPayload"

type UpdateFilesPayloadType = {
  slug: string,
  name: string,
  accepted: Array<any>,
  rejected: Array<any>,
}

export default function updateFilesSignal ({slug, name, accepted, rejected}: UpdateFilesPayloadType): SignalType {
  return function thunk (dispatch: ReduxDispatchType): Promise<SignalType> {
    const accepts = map(pipe(asPayload(slug)(name), updateInputSignal, dispatch), accepted)
    const rejects = map(pipe(asPayload(slug)(name), errorInputSignal, dispatch), rejected)

    return Promise
      .all(
        flatten(
          [
            accepts,
            rejects,
          ]
        )
      )
      .then((): SignalType => dispatch({type: "updateFilesSignal"}))
  }
}
