import React from "react"

import Layout from "../Layout"
import Anchor from "../Anchor"

export default function LandingPage () {
  return <Layout title="Lacqueristas | Welcome to Polish">
    <article>
      <img src="/keyhole-llama.png" />
      <Anchor href="/code-of-conduct">Code of Conduct</Anchor>
    </article>
  </Layout>
}
