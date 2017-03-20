import {prop} from "ramda"
import {isNil} from "ramda"
import {pascal} from "case"

import * as pages from "@lacqueristas/pages"
import {AuthenticationRequired} from "@lacqueristas/pages"
import {PageNotFound} from "@lacqueristas/pages"

export default function route (navigation: object, ephemeral: object): any {
  const {pathname} = navigation
  const component = prop(pascal(pathname), pages)

  if (component && component.authenticate && ephemeral.self) {
    return component
  }

  if (component && component.authenticate && isNil(ephemeral.self)) {
    return AuthenticationRequired
  }

  if (component) {
    return component
  }

  return PageNotFound
}
