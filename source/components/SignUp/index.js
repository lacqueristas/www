import React, {PureComponent, PropTypes} from "react"
import {connect} from "react-redux"

import Layout from "../Layout"
import Button from "../Button"

const styles = {
  input: {
    borderRadius: 3,
    padding: 5
  },
  form: {
    display: "flex",
    flexDirection: "column"
  }
}
const slug = "sign-up"
const withForm = connect((state, props) => {
  const {forms} = state.ui
  const attributes = forms[slug]

  return {
    ...props,
    ...attributes
  }
})

export default withForm(class SignUp extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }

  static defaultProps = {
    form: {}
  }

  static contextTypes = {
    signals: PropTypes.shape({
      pushAccount: global.window ? PropTypes.func.isRequired : PropTypes.func,
      updateInput: global.window ? PropTypes.func.isRequired : PropTypes.func
    }).isRequired
  }

  onSubmitForm () {
    const {dispatch} = this.props
    const {signals: {pushAccount}} = this.context

    return (event) => {
      event.preventDefault()
      dispatch(pushAccount({slug}))
    }
  }

  onChangeInput () {
    const {dispatch} = this.props
    const {signals: {updateInput}} = this.context

    return (event) => {
      const {target} = event
      const {name} = target
      const {value} = target

      return dispatch(updateInput({slug, name, value}))
    }
  }

  render () {
    const {name} = this.props
    const {email} = this.props
    const {password} = this.props

    return <Layout subtitle="Join our website!">
      <section data-component="SignUp">
        <form onSubmit={this.onSubmitForm()} style={styles.form}>
          <fieldset style={styles.fieldset}>
            <section>
            <section>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={this.onChangeInput()} value={email} style={styles.input} />
            </section>

            <section>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" onChange={this.onChangeInput()} value={password} style={styles.input} />
            </section>
          </fieldset>

          <Button kind="primary" type="submit">
            Make me a Lacquerista!
          </Button>
        </form>
      </section>
    </Layout>
  }
})
