import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import {Layout} from "@internal/ui"
import {clientSide} from "@internal/decorators"
import {authenticate} from "@internal/decorators"
import {query} from "@internal/queries"
import {selfQuery} from "@internal/queries"

import WelcomeMessage from "./WelcomeMessage"

export default authenticate(clientSide(connect(
  query([selfQuery])
)(class FrontPage extends PureComponent {
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

  render (){
    const {self: {attributes: {name}}} = this.props

    return <Layout subtitle="The Front Page of Polish" data-component="FrontPage">
      <WelcomeMessage name={name} />
    </Layout>
  }
})))
