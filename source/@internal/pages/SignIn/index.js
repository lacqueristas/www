import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import {Layout} from "@internal/ui"
import {Button} from "@internal/elements"
import {Form} from "@internal/elements"
import {FormSection} from "@internal/elements"
import {ButtonGroup} from "@internal/elements"
import {onlyProps} from "@internal/selectors"
import {dispatched} from "@internal/signals"
import {signInSignal} from "@internal/signals"

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

  render () {
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
