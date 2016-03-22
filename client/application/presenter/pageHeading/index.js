import {
  unless,
  isEmpty
} from "ramda"
import {
  header,
  h1,
  h2
} from "@cycle/dom"

export default (text: string, subtext = "") => {
  return header(
    [
      h1(text),
      unless(isEmpty, h2)(subtext)
    ]
  )
}
