import React from "react"

import Anchor from "../../Anchor"

const registrationStyle = {
  padding: 25,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around"
}

export default function Registration () {
  return <section style={registrationStyle}>
    <Anchor kind="primary" href="/sign-up">
      Join us
    </Anchor>

    <Anchor kind="normal" href="/sign-in">Login</Anchor>
  </section>
}
