import React from "react"

import Layout from "../Layout"
import Button from "../Button"
import Form from "../Form"
import FormSection from "../FormSection"
import ButtonGroup from "../ButtonGroup"

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 150,
  paddingBottom: 150,
}

export default function SignIn () {
  return <Layout subtitle="Join our website!" data-component="SignIn" style={style}>
    <section id="logo">
      <img src="/llama-standing.png" alt="the cute llama mascot standing with tongue out" />
    </section>

    <Form name="SignIn" action="signIn" slug="signIn">
      <FormSection id="email" type="email" required label="Your email" slug="sign-in" />
      <FormSection id="password" type="password" required label="Your password" slug="sign-up" />

      <ButtonGroup>
        <Button kind="primary" type="submit">
          Time to brush up!
        </Button>
      </ButtonGroup>
    </Form>
  </Layout>
}
