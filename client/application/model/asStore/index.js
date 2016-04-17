import asCompleteGraph from "./asCompleteGraph"

// String -> {[type]: Object, n}
export default (resources) => {
  return asCompleteGraph(JSON.parse(resources || "{}"))
}
