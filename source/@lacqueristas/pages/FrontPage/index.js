import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import {Layout} from "@lacqueristas/ui"
import {clientSide} from "@lacqueristas/decorators"
import {authenticate} from "@lacqueristas/decorators"
import {query} from "@lacqueristas/queries"
import {selfQuery} from "@lacqueristas/queries"

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
