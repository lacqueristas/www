export default function exceptionReact (state: StateType): Function {
  return function exceptionReactState (payload: Error): StateType {
    throw payload
  }
}
