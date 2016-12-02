import React from "react"

import Layout from "../Layout"
import Heading from "../Heading"

export default function OurTechnology () {
  return <Layout subtitle="Our Technology">
    <article>
      <Heading kind="section">
        Resource Server
      </Heading>

      <Heading kind="section">
        Origin Server
      </Heading>

      - Express

      <Heading kind="section">
        Browser Client
      </Heading>

      - React
      - Redux
      - Browserify
      - Gulp

      <Heading kind="section">
        Mobile Client
      </Heading>

      - React Native
      - Redux

      <Heading kind="section">
        General Technologies
      </Heading>

      - Babel
      - Node
      - Javascript
      - Chrome
      - Atom

      <Heading kind="section">
        External Services
      </Heading>

      - Google Analytics
      - Mixpanel
      - Bloodhound
      - Metrix
      - SocialKardia
    </article>
  </Layout>
}
