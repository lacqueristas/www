import {p} from "@cycle/dom"
import core from "../core"

export default (state) => {
  console.log('From view:')
  console.log(state)
  return core(
    p("Hello, world.")
  )
}
