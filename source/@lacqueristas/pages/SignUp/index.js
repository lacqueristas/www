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

export default function SignUp () {
  return <Layout subtitle="Join our website!" data-component="SignUp" style={style}>
    <section id="logo">
      <img src="/llama-standing.png" alt="the cute llama mascot standing with tongue out" />
    </section>

    <Form name="SignUp" action="signUp" slug="signUp">
      <FormSection id="name" type="text" required label="Your name" slug="signUp" />
      <FormSection id="email" type="email" required label="Your email" slug="signUp" />
      <FormSection id="password" type="password" required label="A good password" slug="signUp" />

      <ButtonGroup>
        <Button kind="primary" type="submit">
          Make me a Lacquerista!
        </Button>
      </ButtonGroup>
    </Form>
  </Layout>
}