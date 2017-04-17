import {pipe} from "ramda"
import {map} from "ramda"
import {objOf} from "ramda"
import {merge} from "ramda"
import {allP} from "ramda-extra"

import updateInputSignal from "../updateInputSignal"
import errorInputSignal from "../errorInputSignal"
import pushFile from "../pushFile"

const asInput = (name: string): Function => (slug: string): Function => pipe(objOf("value"), merge({multiple: true}), merge({slug}), merge({name}))


export default function uploadFilesSignal ({slug, name, accepted, rejected}: UpdateFilesPayloadType): SignalType {
  const input = asInput(name)(slug)

  return function thunk (dispatch: ReduxDispatchType): Promise<SignalType> {
    const dispatchFiles = (signal: Function): Function => map(pipe(input, signal, dispatch))

    return allP(dispatchFiles(errorInputSignal)(rejected))
      .then((): Promise<Array<SignalType>> => allP(map(pushFile, accepted)))
      .then((pushed: Array<FileResourceType>): Array<SignalType> => {
        return allP([
          ...dispatchFiles(updateInputSignal)(pushed),
          ...dispatchFiles(errorInputSignal)(rejected),
        ])
      })
      .then((): SignalType => dispatch({type: "uploadFilesSignal"}))
  }
}
