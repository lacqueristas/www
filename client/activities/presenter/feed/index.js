import {values} from "ramda"
import {
  section
} from "@cycle/dom"

import chronologicalList from "./chronologicalList"

const style = {
  "padding-top": "10px",
  "padding-bottom": "10px",
  "padding-left": "10px",
  "padding-right": "10px"
}

export default (activities) => {
  return section(
    ".activitiesFeed",
    {style},
    [
      chronologicalList(values(activities))
    ]
  )
}
