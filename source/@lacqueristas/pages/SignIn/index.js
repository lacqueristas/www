import React from "react"

import {Layout} from "@lacqueristas/ui"
import {Button} from "@lacqueristas/elements"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 150,
  paddingBottom: 150,
}

export default function SignIn (): any {
  return <Layout subtitle="Join our website!" data-component="SignIn" style={style}>
    <section id="logo">
      <img src="/llama-standing.png" alt="the cute llama mascot standing with tongue out" />
    </section>

    <Form name="SignIn" action="signIn" slug="signIn">
      <FormSection id="email" type="email" required label="Your email" slug="signIn" />
      <FormSection id="password" type="password" required label="Your password" slug="signIn" />

      <ButtonGroup>
        <Button kind="primary" type="submit">
          Time to brush up!
        </Button>
      </ButtonGroup>
    </Form>
  </Layout>
}
