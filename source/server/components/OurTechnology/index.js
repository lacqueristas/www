import React from "react"

import Layout from "../Layout"
import SectionHeading from "../SectionHeading"

export default function OurTechnology () {
  return <Layout title="Our Technology">
    <article>
      <SectionHeading>
        Resource Server
      </SectionHeading>

      <SectionHeading>
        Origin Server
      </SectionHeading>

      - Express

      <SectionHeading>
        Browser Client
      </SectionHeading>

      - React
      - Redux
      - Browserify
      - Gulp

      <SectionHeading>
        Mobile Client
      </SectionHeading>

      - React Native
      - Redux

      <SectionHeading>
        General Technologies
      </SectionHeading>

      - Babel
      - Node
      - Javascript
      - Chrome
      - Atom

      <SectionHeading>
        External Services
      </SectionHeading>

      - Google Analytics
      - Mixpanel
      - Bloodhound
      - Metrix
      - SocialKardia
    </article>
  </Layout>
}
