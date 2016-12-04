import React from "react"

import Layout from "../Layout"
import Anchor from "../Anchor"

export default function LandingPage () {
  return <Layout subtitle="Welcome to Polish">
    <section>
      <img src="/keyhole-llama.png" alt="the cute llama mascot protruding from a hole in the website" />
      <section data-intent="call to action" style={{padding: 25, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
        <Anchor kind="primary" href="/sign-up">
          Join us
        </Anchor>

        <Anchor kind="normal" href="/sign-in">Login</Anchor>
      </section>
    </section>
  </Layout>
}
