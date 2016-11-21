import React, {PureComponent, PropTypes} from "react"
import {connect} from "react-redux"

import {primary} from "../colors"
import {neutral} from "../colors"

const styles = {
  primary: {
    background: neutral,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: primary,
    textDecoration: "none",
    padding: 15
  },
  regular: {}
}
const MIDDLE_CLICK = 0

export default connect()(class Anchor extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  onClick () {
    const {dispatch} = this.props

    return function trigger (event) {
      const {target} = event
      const {metaKey} = event
      const {nativeEvent} = event
      const {which} = nativeEvent
      const {href} = target

      if (!(metaKey || which === MIDDLE_CLICK)) {
        event.preventDefault()

        return dispatch({type: "NAVIGATE", payload: {href}})
      }

      return null
    }
  }

  render () {
    const {children} = this.props
    const {href} = this.props
    const {type} = this.props

    if (type) {
      return <a href={href} style={styles[type]} onClick={this.onClick()}>
        {children}
      </a>
    }

    return <a href={href} onClick={this.onClick()}>
      {children}
    </a>
  }
})
