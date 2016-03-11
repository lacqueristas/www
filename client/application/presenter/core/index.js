import {main} from "@cycle/dom"
import pageHeading from "../pageHeading"

export default (...children) => main([
  pageHeading("Lacqueristas"),
  ...children
])
