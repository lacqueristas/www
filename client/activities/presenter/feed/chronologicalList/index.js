import {map} from "ramda"
import {ol} from "@cycle/dom"
import {li} from "@cycle/dom"

const asList = map((item) => li(item))

export default (items) => {
  return ol(asList(items))
}
