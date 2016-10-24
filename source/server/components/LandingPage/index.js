import React from "react"

import Layout from "../Layout"
import Anchor from "../Anchor"

export default function LandingPage () {
  return <Layout title="Lacqueristas" subtitle="Welcome to Polish">
    <section>
      <img src="/keyhole-llama.png" alt="the cute llama mascot peeking through a circular hole" />
      <Anchor href="/code-of-conduct">Code of Conduct</Anchor>
    </section>
  </Layout>
}
