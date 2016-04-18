import {header} from "@cycle/dom"
import {h1} from "@cycle/dom"

export default (properties) => {
  return header({
    ...properties,
    content: h1({content: properties.text})
  })
}
