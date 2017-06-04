import {path} from "ramda"

export default function formQuery (state, props) {
  const {slug} = props
  const attributes = path(["ephemeral", "forms", slug], state)

  return {
    ...props,
    ...attributes,
  }
}
