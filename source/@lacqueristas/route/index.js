import {prop} from "ramda"
import {path} from "ramda"
import {isNil} from "ramda"
import {pascal} from "case"

import * as pages from "@lacqueristas/pages"
import {AuthenticationRequired} from "@lacqueristas/pages"
import {PageNotFound} from "@lacqueristas/pages"
import {LandingPage} from "@lacqueristas/pages"
import {LoadingScreen} from "@lacqueristas/pages"

export default function route (navigation: NavigationState, ephemeral: EphemeralState): any {
  const {pathname} = navigation
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
  const self = path(["current", "self"], ephemeral)

  if (authenticate && isNil(self)) {
    return AuthenticationRequired
  }

  return component
}
