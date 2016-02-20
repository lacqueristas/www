import {ol, li} from "@cycle/dom"
import {range, map} from "ramda"

import controls from "../controls"

const MINIMUM = 1
const MAXIMUM = 20

export default () => {
  const postIds = range(MINIMUM, MAXIMUM)
  const posts = map(() => li(".post", [controls(), "Random text here."]))

  return ol(posts(postIds))
}
