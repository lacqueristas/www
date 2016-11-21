import React from "react"

import Layout from "../Layout"
import Anchor from "../Anchor"
import Button from "../Button"

export default function LandingPage () {
  return <Layout subtitle="Welcome to Polish">
    <section>
      <img src="/keyhole-llama.png" alt="the cute llama mascot protruding from a hole in the website" />
      <section data-intent="call to action">
        <Button type="primary" href="/sign-up">
          Join us
        </Button>

        <Anchor href="/sign-in">Login</Anchor>
      </section>
    </section>
  </Layout>
}
