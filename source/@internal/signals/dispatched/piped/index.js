import {pipe} from "ramda"

export default function piped (dispatch) {
  return function pipedDispatch (signal) {
    return pipe(signal, dispatch)
  }
}
