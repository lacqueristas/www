import React from "react"

import Layout from "../Layout"
import Anchor from "../Anchor"

export default function LandingPage () {
  return <Layout subtitle="The Front Page of Polish">
    <section>
      <Anchor kind="primary" href="/sign-up">
        Join us
      </Anchor>

      <Anchor kind="normal" href="/sign-in">Login</Anchor>
    </section>
  </Layout>
}
