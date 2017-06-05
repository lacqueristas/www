import {reduce} from "ramda"

// TODO: Replace with unction/reduce
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
