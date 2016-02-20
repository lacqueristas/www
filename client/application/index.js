import {main} from "@cycle/dom"

import pageHeading from "./pageHeading"
import hero from "./hero"

export default (state) => {
  return main([
    pageHeading("Voteclicker"),
    hero(state)
  ])
}
