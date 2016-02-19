import {p} from "@cycle/dom"

export default ({count}) => {
  return p(
    `This is a cycle.js application. This is count ${String(count)}.`
  )
}
