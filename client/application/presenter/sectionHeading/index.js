import {compose} from "ramda"
import {
  h1,
  header
} from "@cycle/dom"

const header1 =
  (selector = "") =>
  (properties = {}) =>
  (children = []) =>
  h1(selector, properties, children)

export default compose(header, header1(".sectionHeader", {}))
