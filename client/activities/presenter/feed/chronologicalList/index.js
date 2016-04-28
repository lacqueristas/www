import {map} from "ramda"
import {ol} from "snabbdom-helpers"
import {li} from "snabbdom-helpers"

const asList = map((item) => li(item))

export default (items) => {
  return ol(asList(items))
}
