import {main} from "@cycle/dom"

export default (...children) => main(
  "#application",
  {version: "1.0.0"},
  children
)
