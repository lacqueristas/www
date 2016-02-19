import {main} from "@cycle/dom"

import pageHeading from "./pageHeading"
import hero from "./hero"
import controls from "./controls"

export default (state) => {
  return main([
    pageHeading("Hello, World"),
    hero(state),
    controls(state)
  ])
}
