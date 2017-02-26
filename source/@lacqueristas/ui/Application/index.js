import React, {PureComponent, PropTypes} from "react"
import {connect} from "react-redux"

import {PageNotFound} from "@lacqueristas/pages"
import route from "@lacqueristas/route"

const connectNavigation = connect(({navigation}, props) => {
  return {
    navigation,
    ...props,
  }
})

export default connectNavigation(class Application extends PureComponent {
  static propTypes = {
    signals: PropTypes.objectOf(PropTypes.func).isRequired,
    navigation: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      query: PropTypes.object,
    }).isRequired,
  }

  static childContextTypes = {signals: PropTypes.object.isRequired}

  getChildContext () {
    const {signals} = this.props

    return {signals}
  }

  render () {
    const {navigation} = this.props
    const CurrentComponent = route(navigation.pathname) || PageNotFound

    return <CurrentComponent />
  }
})
