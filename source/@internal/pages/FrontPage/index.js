import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {path} from "ramda"

import {Layout} from "@internal/ui"
import {clientSide} from "@internal/decorators"
import {authenticate} from "@internal/decorators"
import {selfQuery} from "@internal/selectors"

import WelcomeMessage from "./WelcomeMessage"

@clientSide
@authenticate
@connect(
  createStructuredSelector({...selfQuery})
)
export default class FrontPage extends PureComponent {
  static propTypes = {
    self: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  render () {
    const name = path(["self", "attributes", "name"])(this.props)

    return <Layout subtitle="The Front Page of Polish" data-component="FrontPage">
      <WelcomeMessage name={name} />
    </Layout>
  }
}
