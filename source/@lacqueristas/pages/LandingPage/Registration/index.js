import React from "react"

import {Anchor} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"

export default function Registration () {
  return <ButtonGroup>
    <Anchor kind="primary" href="/sign-up">
      Join us
    </Anchor>

    <Anchor kind="secondary" href="/sign-in">
      Login
    </Anchor>
  </ButtonGroup>
}
