import {main} from "snabbdom-helpers"

export default (properties) => {
  return main({
    ...properties,
    selector: "#application",
    props: {
      ...properties.props,
      version: "1.0.0"
    }
  })
}
