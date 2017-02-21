import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import {path} from "ramda"

import Layout from "../Layout"
import clientDataRequired from "../clientDataRequired"
import WelcomeMessage from "./WelcomeMessage"

const withAccount = connect((state, props) => {
  const {id} = path(["ephemeral", "self"], state)
  const session = path(["resources", "sessions", id], state)
  const account = path(["relationships", "account", "data"], session)

  return {
    ...props,
    account,
  }
})

export default clientDataRequired(withAccount(class FrontPage extends PureComponent {
  static propTypes = {
    account: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  render () {
    const {account: {attributes: {name}}} = this.props

    return <Layout subtitle="The Front Page of Polish" data-component="FrontPage">
      <WelcomeMessage name={name} />
    </Layout>
  }
}))
