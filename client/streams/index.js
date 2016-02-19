import {Observable} from "rx"

import {upAction$, downAction$} from "../actions"
import {upClick$, downClick$} from "../sources"

const INITIAL_VALUE = 0
const count$ = (DOM) => {
  return Observable.of(INITIAL_VALUE)
    .merge(downAction$(downClick$(DOM)))
    .merge(upAction$(upClick$(DOM)))
    .scan((previous, current) => previous + current)
}
const activities$ = () => Observable.of(INITIAL_VALUE)

export {
  count$,
  activities$
}
