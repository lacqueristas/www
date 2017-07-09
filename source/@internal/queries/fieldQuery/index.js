import {path} from "ramda"

export default function fieldQuery ([slug, name]) {
  return function fieldQuerySlug (state) {
    return {[name]: path(["ephemeral", "forms", slug, name], state)}
  }
}
