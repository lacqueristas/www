import {section} from "@cycle/dom"

import {sectionHeading} from "~/client/application/presenter"
import chronologicalList from "./chronologicalList"

export default ({activities}) => {
  return section([
    sectionHeading("Recent Activities"),
    chronologicalList(activities)
  ])
}
