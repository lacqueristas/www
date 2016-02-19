import {map} from "ramda"

const STEP = 1

const downAction$ = map(() => -Number(STEP))
const upAction$ = map(() => +Number(STEP))

export {
  downAction$,
  upAction$
}
