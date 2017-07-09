export default function exceptionReact (state) {
  return function exceptionReactState (payload) {
    throw payload
  }
}
