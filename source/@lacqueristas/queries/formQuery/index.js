import {path} from "ramda"

export default function formQuery (state: StateType, props: FormQueryPropertiesType): FormQueryStateType {
  const {slug} = props
  const attributes = path(["ephemeral", "forms", slug], state)

  return {
    ...props,
    ...attributes,
  }
}
