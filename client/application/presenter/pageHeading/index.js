import {unless} from "ramda"
import {isEmpty} from "ramda"

import {header} from "@cycle/dom"
import {h1} from "@cycle/dom"
import {h2} from "@cycle/dom"

export default (text, subtext = "") => {
  return header(
    [
      h1(text),
      unless(isEmpty, h2)(subtext)
    ]
  )
}
