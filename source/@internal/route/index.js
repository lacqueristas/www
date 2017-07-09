import {prop} from "ramda"
import {path} from "ramda"
import {isNil} from "ramda"
import {pascal} from "case"

import * as pages from "@internal/pages"
import {AuthenticationRequired} from "@internal/pages"
import {PageNotFound} from "@internal/pages"
import {LandingPage} from "@internal/pages"
import {LoadingScreen} from "@internal/pages"

export default function route (navigation, ephemeral) {
  const {pathname} = navigation
  // TODO: This is not an appropriate way to handle pathing :P
  const component = prop(pascal(pathname), pages)

  if (pathname === "/") {
    return LandingPage
  }

  if (isNil(component)) {
    return PageNotFound
  }

  const {clientSide} = component

  if (clientSide && !global.window) {
    return LoadingScreen
  }

  const {authenticate} = component
  const currentSession = path(["current", "session"], ephemeral)

  if (authenticate && isNil(currentSession)) {
    return AuthenticationRequired
  }

  return component
}
