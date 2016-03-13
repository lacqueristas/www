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
const noProperties = always({})
const domElement = curryN(LENGTH)
const headerText = domElement(h1)

export default compose(
  header,
  headerText(".pageHeader", noProperties)
)
