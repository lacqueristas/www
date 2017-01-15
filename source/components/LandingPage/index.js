import React from "react"

import Layout from "../Layout"
import Heading from "../Heading"
import Newsletter from "./Newsletter"
import Registration from "./Registration"

  alignItems: "center",
}
const isSiteReady = false

export default function LandingPage () {
  return <Layout subtitle="Welcome to Polish">
    <section data-componet="LandingPage">
      <section id="left-panel">
        <Heading kind="page" subtitle="Welcome to Polish">
          Lacqueristas
        </Heading>


      </section>

      <section id="right-panel">
        <img src="/llama-sitting.png" alt="the cute llama mascot sitting and looking silly" />
      </section>

      <section id="call-to-action">
        {
          isSiteReady
          ? <Registration />
          : <Newsletter />
        }
      </section>
    </section>
  </Layout>
}
