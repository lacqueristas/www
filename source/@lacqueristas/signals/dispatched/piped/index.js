import {pipe} from "ramda"

export default function piped (dispatch: ReduxDispatchType): Function {
  return function pipedDispatch (signal: Function): Function {
    return pipe(signal, dispatch)
  }
}
