import {path} from "ramda"

export default function fieldFieldSelector ([slug, name]) {
  return function fieldFieldSelectorSlug (state) {
    return {[name]: path(["ephemeral", "forms", slug, name], state)}
  }
}
