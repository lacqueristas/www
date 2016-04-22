import {values} from "ramda"
import {map} from "ramda"
import {section} from "snabbdom-helpers"
import {render} from "mustache"

import chronologicalList from "./chronologicalList"

const style = {
  "padding-top": "10px",
  "padding-bottom": "10px",
  "padding-left": "10px",
  "padding-right": "10px"
}
const renderedSummary = ({summary, metadata}) => render(summary, metadata)

export default (activities) => {
  return section(
    ".activitiesFeed",
    {style},
    [
      chronologicalList(map(renderedSummary, values(activities)))
    ]
  )
}
