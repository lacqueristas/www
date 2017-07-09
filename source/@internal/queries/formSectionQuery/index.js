import {path} from "ramda"

export default function formSectionQuery (state, props) {
  const {slug} = props
  const {id} = props
  const value = path(["ephemeral", "forms", slug, id], state)

  return {
    ...props,
    name: id,
    value,
  }
}
