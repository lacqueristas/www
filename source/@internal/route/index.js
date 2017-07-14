import {prop} from "ramda"
import {isNil} from "ramda"
import {pascal} from "case"
import uriTemplates from "uri-templates"

import * as pages from "@internal/pages"
import {AuthenticationRequired} from "@internal/pages"
import {PageNotFound} from "@internal/pages"
import {LandingPage} from "@internal/pages"
import {LoadingScreen} from "@internal/pages"

const template = uriTemplates("/{component}{/id}")

export default function route ({pathname, session}) {
  const component = prop(pascal(template.fromUri(pathname).component), pages)

  if (pathname === "/") {
    return LandingPage
  }

  if (isNil(component)) {
    return PageNotFound
  }

  if (component.clientSide && !global.window) {
    return LoadingScreen
  }

  if (component.authenticate && isNil(session)) {
    return AuthenticationRequired
  }

  return component
}
