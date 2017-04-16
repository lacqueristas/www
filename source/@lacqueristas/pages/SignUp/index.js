import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import cxs from "cxs"

import {Layout} from "@lacqueristas/ui"
import {Button} from "@lacqueristas/elements"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"
import {onlyProps} from "@lacqueristas/queries"
import {dispatched} from "@lacqueristas/signals"
import {signUpSignal} from "@lacqueristas/signals"

const slug = "signUp"
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  paddingTop: 150,
  paddingBottom: 150,
}
const sectionStyle = {minWidth: 320}

export default connect(
  onlyProps,
  dispatched({signUp: signUpSignal})
)(class SignUp extends PureComponent {
  static propTypes = {signUp: PropTypes.func.isRequired}

  render (): any {
    const {signUp} = this.props

    return <Layout subtitle="Join our website!" data-component="SignUp" style={style}>
      <section id="logo" className={cxs(sectionStyle)}>
        <img src="/llama-standing.png" alt="the cute llama mascot standing with tongue out" />
      </section>

      <Form name="SignUpForm" onSubmit={signUp} slug={slug} style={sectionStyle}>
        <FormSection id="name" type="text" required label="Your name" slug={slug} />
        <FormSection id="email" type="email" required label="Your email" slug={slug} />
        <FormSection id="password" type="password" required label="A good password" slug={slug} />

        <ButtonGroup>
          <Button kind="primary" type="submit">
            Make me a Lacquerista!
          </Button>
        </ButtonGroup>
      </Form>
    </Layout>
  }
})
