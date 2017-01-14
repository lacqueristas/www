import React from "react"

import Layout from "../Layout"
import Anchor from "../Anchor"
import Heading from "../Heading"
import Newsletter from "./Newsletter"

const callToActionStyle = {
  padding: 25,
  display: "none",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around"
}

export default function LandingPage () {
  return <Layout subtitle="Welcome to Polish">
    <section data-componet="LandingPage">
      <section id="left-panel">
        <Heading kind="page" subtitle="Welcome to Polish">
          Lacqueristas
        </Heading>

        <img src="/llama-sitting.png" alt="the cute llama mascot sitting and looking silly" />
      </section>

      <section id="right-panel">
        <Newsletter />
      </section>

      <section data-intent="call to action" style={callToActionStyle}>
        <Anchor kind="primary" href="/sign-up">
          Join us
        </Anchor>

        <Anchor kind="normal" href="/sign-in">Login</Anchor>
      </section>
    </section>
  </Layout>
}
