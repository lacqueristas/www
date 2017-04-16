import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"

import {Layout} from "@lacqueristas/ui"
import {Button} from "@lacqueristas/elements"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"
import {onlyProps} from "@lacqueristas/queries"
import {dispatched} from "@lacqueristas/signals"
import {signInSignal} from "@lacqueristas/signals"

const slug = "signIn"
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 150,
  paddingBottom: 150,
}

export default connect(
  onlyProps,
  dispatched({signIn: signInSignal})
)(class SignIn extends PureComponent {
  static propTypes = {signIn: PropTypes.func.isRequired}

  render (): any {
    const {signIn} = this.props

    return <Layout subtitle="Join our website!" data-component="SignIn" style={style}>
      <section id="logo">
        <img src="/llama-standing.png" alt="the cute llama mascot standing with tongue out" />
      </section>

      <Form name="SignInForm" onSubmit={signIn} slug={slug}>
        <FormSection id="email" type="email" required label="Your email" slug={slug} />
        <FormSection id="password" type="password" required label="Your password" slug={slug} />

        <ButtonGroup>
          <Button kind="primary" type="submit">
            Time to brush up!
          </Button>
        </ButtonGroup>
      </Form>
    </Layout>
  }
})
