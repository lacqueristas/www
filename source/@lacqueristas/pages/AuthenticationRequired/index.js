import React from "react"

import {Layout} from "@lacqueristas/ui"
import {Anchor} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"
import {Heading} from "@lacqueristas/elements"

export default function AuthenticationRequired () {
  return <Layout subtitle="Sorry, you need access!" data-component="AuthenticationRequired">
    <Heading kind="page">
      Woops, you are not signed in!
    </Heading>

    <p>
      Looks like you attempted to access a page that requires authorization. We can&apos;t let you see this information until you tell us who you are!
    </p>

    <ButtonGroup>
      <Anchor kind="primary" href="/sign-up">Sign Up</Anchor>
      <Anchor kind="secondary" href="/sign-in">Sign In</Anchor>
    </ButtonGroup>
  </Layout>
}
