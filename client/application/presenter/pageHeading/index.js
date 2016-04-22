import {header} from "snabbdom-helpers"
import {h1} from "snabbdom-helpers"

export default (properties) => {
  return header({
    ...properties,
    content: h1({content: properties.text})
  })
}
