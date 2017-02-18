import React from "react"

import Anchor from "../../Anchor"
import ButtonGroup from "../../ButtonGroup"

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
