import {unless} from "ramda"
import {isEmpty} from "ramda"

import {header} from "@cycle/dom"
import {h1} from "@cycle/dom"
import {h2} from "@cycle/dom"

export default (properties) => {
  return header(
    {style: {...properties.style}},
    [
      h1(properties.text),
      unless(isEmpty, h2)(properties.subtext)
    ]
  )
}
