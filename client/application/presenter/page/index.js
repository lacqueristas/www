import {main} from "@cycle/dom"

export default (...children: any[]) => main(
  "#application",
  {version: "1.0.0"},
  children
)
