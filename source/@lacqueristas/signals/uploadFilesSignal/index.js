import {pipe} from "ramda"
import {objOf} from "ramda"
import {merge} from "ramda"
import allP from "@unction/allp"
import mapValues from "@unction/mapvalues"

import updateInputSignal from "../updateInputSignal"
import errorInputSignal from "../errorInputSignal"
import pushFile from "../pushFile"

const asInput = (name: string): Function => (slug: string): Function =>

export default function uploadFilesSignal ({slug, name, accepted, rejected}: UpdateFilesPayloadType): SignalType {
  const file = pipe(objOf("value"), merge({
    multiple: true,
    slug,
    name,
  }))

  return function thunk (dispatch: ReduxDispatchType): Promise<SignalType> {
    const dispatches = (signal: Function): Function => mapValues(pipe(file, signal, dispatch))

    return allP(mapValues(pushFile)(accepted))
      .then((delivered: Array<Promise<FileResourceType>>): Array<SignalType> => allP([
        ...dispatches(updateInputSignal)(delivered),
        ...dispatches(errorInputSignal)(rejected),
      ]))
      .then((): SignalType => dispatch({type: "uploadFilesSignal"}))
  }
}
