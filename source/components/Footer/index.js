import React from "react"

import Anchor from "../Anchor"
import Heading from "../Heading"
import {dark as darkColor} from "../colors"
import {neutral as neutralColor} from "../colors"
import {inverseAnchor as inverseAnchorColor} from "../colors"

const documentationStyle = {

}
const copyrightStyle = {

}
const socialStyle = {

}
const footerStyle = {
  display: "flex",
  flexDirection: "row",
  textAlign: "center",
  paddingTop: 75,
  paddingBottom: 100,
  backgroundColor: darkColor,
  color: neutralColor,
}
const columnStyle = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
}
const headingStyle = {
  fontSize: "3rem",
}

export default function Footer () {
  return <footer data-component="Footer" style={footerStyle}>
    <section data-intent="documentation links" style={{...columnStyle, ...documentationStyle}}>
      <Heading kind="section" customHeadingsStyle={headingStyle}>
        Documentation
      </Heading>
      <Anchor kind="normal" style={{color: inverseAnchorColor}} href="/this-is-us">This Is Us</Anchor>
      <Anchor kind="normal" style={{color: inverseAnchorColor}} href="/code-of-conduct">Code of Conduct</Anchor>
      <Anchor kind="normal" style={{color: inverseAnchorColor}} href="/data-policy">Data Policy</Anchor>
      <Anchor kind="normal" style={{color: inverseAnchorColor}} href="/our-technology">Our Technology</Anchor>
      <Anchor kind="normal" style={{color: inverseAnchorColor}} href="/privacy-policy">Privacy Policy</Anchor>
      <Anchor kind="normal" style={{color: inverseAnchorColor}} href="/terms-of-service">Terms Of Service</Anchor>
    </section>

    <section data-intent="copyright information" style={{...columnStyle, ...copyrightStyle}}>
      <Heading kind="section" customHeadingsStyle={headingStyle}>
        Legal
      </Heading>
      <p>
        <strong>Lacqueristas</strong> by <Anchor kind="normal" style={{color: inverseAnchorColor}} href="https://www.kurtisrainboltgreene.name">Kurtis Rainbolt-Greene</Anchor>. The source code is licensed <Anchor kind="normal" style={{color: inverseAnchorColor}} href="http://opensource.org/licenses/isc-license.php">ISC</Anchor>. The website content is licensed <Anchor kind="normal" style={{color: inverseAnchorColor}} href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</Anchor>.
      </p>
    </section>

    <section data-intent="social profiles" style={{...columnStyle, ...socialStyle}}>
      <Heading kind="section" customHeadingsStyle={headingStyle}>
        Find us
      </Heading>
      <p>
        <Anchor kind="normal" style={{color: inverseAnchorColor}} href="https://github.com/lacqueristas">
          <icon className="fa fa-github" />
        </Anchor>
        <Anchor kind="normal" style={{color: inverseAnchorColor}} href="https://twitter.com/lacqueristas">
          <icon className="fa fa-twitter" />
        </Anchor>
      </p>
    </section>
  </footer>
}
