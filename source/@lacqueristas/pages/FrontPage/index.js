import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import {path} from "ramda"

import {Layout} from "@lacqueristas/ui"
import {clientSide} from "@lacqueristas/decorators"
import {authenticate} from "@lacqueristas/decorators"
import WelcomeMessage from "./WelcomeMessage"

const withAccount = connect((state: StateType, props: mixed): mixed => {
  const self = path(["ephemeral", "current", "self"], state)
  const session = path(["resources", "sessions", self], state)
  const account = path(["relationships", "account", "data"], session)

  return {
    ...props,
    account,
  }
})

export default authenticate(clientSide(withAccount(class FrontPage extends PureComponent {
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

  render (): any {
    const {account: {attributes: {name}}} = this.props

    return <Layout subtitle="The Front Page of Polish" data-component="FrontPage">
      <WelcomeMessage name={name} />
    </Layout>
  }
})))
