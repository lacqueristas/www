import React from "react"

import Layout from "../Layout"
import Heading from "../Heading"
import Newsletter from "./Newsletter"
import Registration from "./Registration"

const landingPageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 150,
  paddingBottom: 150,
}
const isSiteReady = true

export default function LandingPage () {
  return <Layout subtitle="Welcome to Polish" data-component="LandingPage" style={landingPageStyle}>
    <section id="brand">
      <Heading kind="page" subtitle="Welcome to Polish">
        Lacqueristas
      </Heading>
    </section>

    <section id="logo">
      <img src="/llama-sitting.png" alt="the cute llama mascot sitting and looking silly" />
    </section>

    <section id="call-to-action">
      {isSiteReady ? <Registration /> : <Newsletter />}
      <Newsletter />
    </section>
  </Layout>
}
