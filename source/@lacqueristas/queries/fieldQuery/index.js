import {path} from "ramda"

export default function fieldQuery ([slug, name]: [string, string]): Function {
  return function fieldQuerySlug (state: StateType): FormQueryStateType {
    return {[name]: path(["ephemeral", "forms", slug, name], state)}
  }
}
