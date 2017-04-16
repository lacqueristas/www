import {path} from "ramda"

export default function formSectionQuery (state: StateType, props: FormQueryPropertiesType): FormQueryStateType {
  const {slug} = props
  const attributes = path(["ephemeral", "forms", slug], state)

  return {
    ...props,
    ...attributes,
  }
}
