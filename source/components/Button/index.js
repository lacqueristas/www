import React, {PureComponent, PropTypes} from "react"
import {connect} from "react-redux"

import {primaryInteraction} from "../styles"

const styles = {
  primary: {
    ...primaryInteraction
  }
}

export default connect()(class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.objectOf(PropTypes.anyOf(PropTypes.string, PropTypes.number)).isRequired,
    kind: PropTypes.oneOf(["primary"]).isRequired,
    type: PropTypes.oneOf(["submit", "reset"]),
    dispatch: PropTypes.func.isRequired
  }

  static defaultProps = {
    style: {}
  }

  onClick () {
    const {dispatch} = this.props

    return function trigger (event) {
      const {target} = event
      const {href} = target

      event.preventDefault()

      return dispatch({type: "navigate", payload: {href}})
    }
  }

  render () {
    const {children} = this.props
    const {kind} = this.props
    const {type} = this.props

    if (type) {
      return <button type={type} style={styles[kind]}>
        {children}
      </button>
    }

    return <button style={styles[kind]}>
      {children}
    </button>
  }
})
