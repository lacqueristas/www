export default function exceptionReact () {
  return function exceptionReactState (payload) {
    throw payload
  }
}
