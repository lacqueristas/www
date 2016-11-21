import React from "react"

import Anchor from "../Anchor"

export default function Footer () {
  return <footer data-component="Footer">
    <section data-intent="internal links">
      <Anchor href="/this-is-us">This Is Us</Anchor>
      <Anchor href="/code-of-conduct">Code of Conduct</Anchor>
      <Anchor href="/data-policy">Data Policy</Anchor>
      <Anchor href="/our-technology">Our Technology</Anchor>
      <Anchor href="/privacy-policy">Privacy Policy</Anchor>
      <Anchor href="/terms-of-service">Terms Of Service</Anchor>
    </section>
    <section data-intent="copyright information">
      <p>
        <strong>Lacqueristas</strong> by <a href="https://www.kurtisrainboltgreene.name">Kurtis Rainbolt-Greene</a>. The source code is licensed <a href="http://opensource.org/licenses/isc-license.php">ISC</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
      </p>
    </section>

    <section data-intent="social profiles">
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
