import React from "react"

import Layout from "../Layout"
import Button from "../Button"
import Form from "../Form"
import FormSection from "../FormSection"
import ButtonGroup from "../ButtonGroup"

export default function SignUp () {
  return <Layout subtitle="Join our website!">
    <Form name="SignUp" action="signup" slug="sign-up">
      <FormSection id="name" type="text" required label="Your name" slug="sign-up" />
      <FormSection id="email" type="email" required label="Your email" slug="sign-up" />
      <FormSection id="password" type="password" required label="A good password" slug="sign-up" />

      <ButtonGroup>
        <Button kind="primary" type="submit">
          Make me a Lacquerista!
        </Button>
      </ButtonGroup>
    </Form>
  </Layout>
}
