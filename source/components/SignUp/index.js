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
const formName = "sign-up"
const withForm = connect((state, props) => {
  const {forms} = state.ui
  const form = forms[formName]

  return {
    ...props,
    form
  }
})

export default withForm(class SignUp extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string
    }).isRequired
  }

  static defaultProps = {
    form: {}
  }

  onSubmitForm () {
    const {dispatch} = this.props
    const {form} = this.props

    return (event) => {
      event.preventDefault()
      dispatch({type: "requestSignUp", payload: form})
    }
  }

  onChangeInput () {
    const {dispatch} = this.props

    return (event) => {
      const {target} = event
      const {name} = target
      const {value} = target

      return dispatch({type: "updateInput", payload: {formName, data: {[name]: value}}})
    }
  }

  render () {
    const {form} = this.props

    return <Layout subtitle="Join our website!">
      <section data-component="SignUp">
        <form onSubmit={this.onSubmitForm()} style={styles.form}>
          <fieldset style={styles.fieldset}>
            <section>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={this.onChangeInput()} value={form.email} style={styles.input} />
            </section>
            <section>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" onChange={this.onChangeInput()} value={form.password} style={styles.input} />
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
