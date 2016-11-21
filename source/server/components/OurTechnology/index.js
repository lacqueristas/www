import React from "react"

import Layout from "../Layout"
import Heading from "../Heading"

export default function OurTechnology () {
  return <Layout title="Our Technology">
    <article>
      <Heading type="section">
        Resource Server
      </Heading>

      <Heading type="section">
        Origin Server
      </Heading>

      - Express

      <Heading type="section">
        Browser Client
      </Heading>

      - React
      - Redux
      - Browserify
      - Gulp

      <Heading type="section">
        Mobile Client
      </Heading>

      - React Native
      - Redux

      <Heading type="section">
        General Technologies
      </Heading>

      - Babel
      - Node
      - Javascript
      - Chrome
      - Atom

      <Heading type="section">
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
