import {values} from "ramda"
import chronologicalList from "./chronologicalList"

export default (activities) => {
  return chronologicalList(values(activities))
}
