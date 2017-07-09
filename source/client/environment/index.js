import reduceValues from "@unction/reducevalues"

export default reduceValues(
  (previous, element) => {
    if (element.getAttribute("type") !== "environment") {
      return previous
    }

    return {
      ...previous,
      [element.getAttribute("name")]: element.getAttribute("content"),
    }
  }
)(
  {}
)
