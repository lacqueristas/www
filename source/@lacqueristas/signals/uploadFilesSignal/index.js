import {pipe} from "ramda"
import {objOf} from "ramda"
import {merge} from "ramda"
import allP from "@unction/allp"
import mapValues from "@unction/mapvalues"

import updateInputSignal from "../updateInputSignal"
import errorInputSignal from "../errorInputSignal"
import pushFile from "../pushFile"

export default function uploadFilesSignal ({slug, name, accepted, rejected}) {
  const file = pipe(objOf("value"), merge({
    multiple: true,
    slug,
    name,
  }))

  return function thunk (dispatch) {
    const dispatches = (signal) => mapValues(pipe(file, signal, dispatch))

    return allP(mapValues(pushFile)(accepted))
      .then((delivered) => allP([
        ...dispatches(updateInputSignal)(delivered),
        ...dispatches(errorInputSignal)(rejected),
      ]))
      .then(() => dispatch({type: "uploadFilesSignal"}))
  }
}
