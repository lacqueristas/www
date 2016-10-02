import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"

import NotFound from "../NotFound"
import route from "./route"

const connectNavigation = connect(({navigation}, props) => ({navigation, ...props}))

export default connectNavigation(class Application extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      query: PropTypes.object
    })
  }

  render () {
    const {navigation} = this.props
    const CurrentComponent = route(navigation.pathname) || NotFound

    return <CurrentComponent />
  }
})
