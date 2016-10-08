import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"

const MIDDLE_CLICK = 0

export default connect()(class Anchor extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  onClickA () {
    const {dispatch} = this.props

    return function trigger (event) {
      const {target} = event
      const {metaKey} = event
      const {nativeEvent} = event
      const {which} = nativeEvent
      const {href} = target

      if (!(metaKey || which === MIDDLE_CLICK)) {
        event.preventDefault()
      }

      return dispatch({type: "NAVIGATE", payload: {href}})
    }
  }

  render () {
    const {children} = this.props
    const {href} = this.props

    return <a href={href} onClick={this.onClickA()}>{children}</a>
  }
})