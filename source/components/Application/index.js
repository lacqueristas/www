import React, {PureComponent, PropTypes} from "react"
import {connect} from "react-redux"

import PageNotFound from "../PageNotFound"
import route from "../route"

const connectNavigation = connect(({navigation}, props) => ({navigation, ...props}))

export default connectNavigation(class Application extends PureComponent {
  static propTypes = {
    signals: PropTypes.object.isRequired,
    navigation: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      query: PropTypes.object
    }).isRequired
  }

  static childContextTypes = {
    signals: PropTypes.object.isRequired
  }

  getChildContext () {
    const {signals} = this.props

    return {
      signals
    }
  }

  render () {
    const {navigation} = this.props
    const CurrentComponent = route(navigation.pathname) || PageNotFound

    return <CurrentComponent />
  }
})