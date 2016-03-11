import {Observable} from "rx"

const asState = (activities) => ({activities})
const defaultState = {activities: []}

export default (...states$) => {
  return Observable
    .combineLatest(...states$, asState)
    .startWith(defaultState)
}
