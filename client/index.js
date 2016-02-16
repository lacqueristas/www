import Rx from "rx"
import Cycle from "@cycle/core"
import CycleDOM from "@cycle/dom"

const {Observable} = Rx
const {run} = Cycle
const {button, section, makeDOMDriver} = CycleDOM

const main = () => {
  return {
    DOM: Observable.of(section([button(".decrement", "Down")]))
  }
}

const drivers = {
  DOM: makeDOMDriver("main")
}

run(main, drivers)
