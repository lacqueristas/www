import React from "react"

import {Layout} from "@internal/ui"
import {Heading} from "@internal/elements"

export default function TheCost () {
  return <Layout subtitle="The Cost" kind="article" data-component="TheCost">
    <section>
      <Heading kind="section">
        Origin Production Server
      </Heading>

      <p>
        This is where the primary resource API is hosted.
      </p>

      <ul>
        <li><strong>Company</strong>: Heroku</li>
        <li><strong>Cost</strong>: $75/mth</li>
      </ul>

      <Heading kind="section">
        Origin Staging Server
      </Heading>

      <p>
        This is where we experiment with new origin server changes.
      </p>

      <ul>
        <li><strong>Company</strong>: Heroku</li>
        <li><strong>Cost</strong>: $57/mth</li>
      </ul>

      <Heading kind="section">
        WWW Production Server
      </Heading>

      <p>
        This is the server that serves our frontend browser client.
      </p>

      <ul>
        <li><strong>Company</strong>: Heroku</li>
        <li><strong>Cost</strong>: $25/mth</li>
      </ul>

      <Heading kind="section">
        WWW Staging Server
      </Heading>

      <p>
        The experimental server for our frontend browser client.
      </p>

      <ul>
        <li><strong>Company</strong>: Heroku</li>
        <li><strong>Cost</strong>: $7/mth</li>
      </ul>
    </section>
  </Layout>
}
