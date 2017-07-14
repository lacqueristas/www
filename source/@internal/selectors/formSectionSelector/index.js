import {path} from "ramda"

export default function formSectionSelector (state, props) {
  const {slug} = props
  const {id} = props
  const value = path(["ephemeral", "forms", slug, id], state)

  return {
    name: id,
    value,
  }
}
