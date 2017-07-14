import {path} from "ramda"

export default function formSelector (state, props) {
  const {slug} = props

  return path(["ephemeral", "forms", slug], state)
}
