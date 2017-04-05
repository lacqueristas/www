import React, {PureComponent, PropTypes} from "react"
import {connect} from "react-redux"

import route from "@lacqueristas/route"

const connectNavigation = connect((state: StateType, props: mixed): object => {
  return {
    navigation: state.navigation,
    ephemeral: state.ephemeral,
    ...props,
  }
})

export default connectNavigation(class Application extends PureComponent {
  static propTypes = {
    signals: PropTypes.objectOf(PropTypes.func).isRequired,
    ephemeral: PropTypes.shape({current: PropTypes.shape({self: PropTypes.string}).isRequired}).isRequired,
    navigation: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      query: PropTypes.object,
    }).isRequired,
  }

  static childContextTypes = {signals: PropTypes.object.isRequired}

  getChildContext (): object {
    return {signals: this.props.signals}
  }

  render (): any {
    const {navigation} = this.props
    const {ephemeral} = this.props
    const CurrentComponent = route(navigation, ephemeral)

    return <CurrentComponent />
  }
})
