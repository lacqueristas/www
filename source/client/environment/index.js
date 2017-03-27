import {reduce} from "ramda"

export default reduce(
  (previous: object, element: any): object => {
    if (element.getAttribute("type") !== "environment") {
      return previous
    }

    return {
      ...previous,
      [element.getAttribute("name")]: element.getAttribute("content"),
    }
  },
  {},
)
