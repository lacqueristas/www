import React from "react"
import cxs from "cxs"

import {Anchor} from "@internal/elements"
import {Heading} from "@internal/elements"
import {dark as darkColor} from "@internal/colors"
import {neutral as neutralColor} from "@internal/colors"
import {inverseAnchor as inverseAnchorColor} from "@internal/colors"

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minWidth: 320,
  textAlign: "center",
}
const documentationStyle = columnStyle
const copyrightStyle = columnStyle
const socialStyle = columnStyle
const footerStyle = {
  backgroundColor: darkColor,
  color: neutralColor,
  paddingBottom: 100,
}
const linksStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}
const headerStyle = {padding: 5}
const headingStyle = {fontSize: "3rem"}
const linkStyle = {color: inverseAnchorColor}

export default function Footer () {
  return <footer data-component="Footer" className={cxs(footerStyle)}>
    <header className={cxs(headerStyle)}>
      <Heading kind="page">
        <img src="/small-keyhole-llama.png" alt="the llama logo" />
        Lacqueristas
      </Heading>
    </header>
    <section data-intent="links" className={cxs(linksStyle)}>
      <section data-intent="documentation links" className={cxs(documentationStyle)}>
        <Heading kind="section" customHeadingsStyle={headingStyle}>
          Documentation
        </Heading>
        <Anchor className={cxs(linkStyle)} href="/this-is-us">This Is Us</Anchor>
        <Anchor className={cxs(linkStyle)} href="/code-of-conduct">Code of Conduct</Anchor>
        <Anchor className={cxs(linkStyle)} href="/data-policy">Data Policy</Anchor>
        <Anchor className={cxs(linkStyle)} href="/our-technology">Our Technology</Anchor>
        <Anchor className={cxs(linkStyle)} href="/privacy-policy">Privacy Policy</Anchor>
        <Anchor className={cxs(linkStyle)} href="/terms-of-service">Terms Of Service</Anchor>
      </section>

      <section data-intent="copyright information" className={cxs(copyrightStyle)}>
        <Heading kind="section" customHeadingsStyle={headingStyle}>
          Legal
        </Heading>
        <p>
          <strong>Lacqueristas</strong> by <Anchor className={cxs(linkStyle)} href="https://www.kurtisrainboltgreene.name">Kurtis Rainbolt-Greene</Anchor>.
          The source code is licensed <Anchor className={cxs(linkStyle)} href="http://opensource.org/licenses/isc-license.php">ISC</Anchor>.
          The website content is licensed <Anchor className={cxs(linkStyle)} href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</Anchor>.
        </p>
      </section>

      <section data-intent="social profiles" className={cxs(socialStyle)}>
        <Heading kind="section" customHeadingsStyle={headingStyle}>
          Find us
        </Heading>
        <p>
          <Anchor className={cxs(linkStyle)} href="https://github.com/lacqueristas"><icon className="fa fa-github" /></Anchor>
          <Anchor className={cxs(linkStyle)} href="https://twitter.com/lacqueristas"><icon className="fa fa-twitter" /></Anchor>
        </p>
      </section>
    </section>
  </footer>
}
