import {reduce} from "ramda"

export default reduce(
  (previous, element) => {
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
