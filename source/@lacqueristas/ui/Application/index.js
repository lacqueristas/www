import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import route from "@lacqueristas/route"

// TODO: Turn this into a query
const connectNavigation = connect((state, props) => {
  return {
    navigation: state.navigation,
    ephemeral: state.ephemeral,
    ...props,
  }
})

export default connectNavigation(class Application extends PureComponent {
  static propTypes = {
    ephemeral: PropTypes.shape({current: PropTypes.shape({session: PropTypes.string}).isRequired}).isRequired,
    navigation: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      query: PropTypes.object,
    }).isRequired,
  }

  render () {
    const {navigation} = this.props
    const {ephemeral} = this.props
    const CurrentComponent = route(navigation, ephemeral)

    return <CurrentComponent />
  }
})
