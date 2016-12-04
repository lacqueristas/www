import React from "react"

import Anchor from "../Anchor"
import Heading from "../Heading"

export default function Footer () {
  return <footer data-component="Footer">
    <section data-intent="documentation links">
      <Heading kind="section">
        Documentation
      </Heading>
      <Anchor kind="normal" href="/this-is-us">This Is Us</Anchor>
      <Anchor kind="normal" href="/code-of-conduct">Code of Conduct</Anchor>
      <Anchor kind="normal" href="/data-policy">Data Policy</Anchor>
      <Anchor kind="normal" href="/our-technology">Our Technology</Anchor>
      <Anchor kind="normal" href="/privacy-policy">Privacy Policy</Anchor>
      <Anchor kind="normal" href="/terms-of-service">Terms Of Service</Anchor>
    </section>
    <section data-intent="copyright information">
      <Heading kind="section">
        Legal
      </Heading>
      <p>
        <strong>Lacqueristas</strong> by <a href="https://www.kurtisrainboltgreene.name">Kurtis Rainbolt-Greene</a>. The source code is licensed <a href="http://opensource.org/licenses/isc-license.php">ISC</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
      </p>
    </section>

    <section data-intent="social profiles">
      <Heading kind="section">
        Find us
      </Heading>
      <p>
        <a href="https://github.com/lacqueristas">
          <icon className="fa fa-github" />
        </a>
        <a href="https://twitter.com/lacqueristas">
          <icon className="fa fa-twitter" />
        </a>
      </p>
    </section>
  </footer>
}
