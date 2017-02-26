import React from "react"
import cxs from "cxs"

import {Layout} from "@lacqueristas/ui"
import {Heading} from "@lacqueristas/elements"
import Newsletter from "./Newsletter"
import Registration from "./Registration"

const landingPageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  paddingTop: 150,
  paddingBottom: 150,
}
const sectionStyle = {minWidth: 400}
const isSiteReady = true

export default function LandingPage () {
  return <Layout subtitle="Welcome to Polish" data-component="LandingPage" style={landingPageStyle}>
    <section id="brand" className={cxs(sectionStyle)}>
      <Heading kind="page" subtitle="Welcome to Polish">
        Lacqueristas
      </Heading>
    </section>

    <section id="logo" className={cxs(sectionStyle)}>
      <img src="/llama-sitting.png" alt="the cute llama mascot sitting and looking silly" />
    </section>

    <section id="call-to-action" className={cxs(sectionStyle)}>
      {isSiteReady ? <Registration /> : <Newsletter />}
      <Newsletter />
    </section>
  </Layout>
}
