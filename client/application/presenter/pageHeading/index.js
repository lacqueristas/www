import {
  compose,
  curryN,
  always
} from "ramda"
import {
  h1,
  header
} from "@cycle/dom"

const LENGTH = 3
const domElement = curryN(LENGTH)
const noProperties = always({})
const headerText = domElement(h1)

export default compose(
  header,
  headerText(".pageHeader", noProperties)
)
