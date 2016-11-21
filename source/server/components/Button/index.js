import React, {PureComponent, PropTypes} from "react"
import {connect} from "react-redux"

import {primary} from "../colors"
import {neutral} from "../colors"

const styles = {
  primary: {
    background: neutral,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: primary
  }
}

export default connect()(class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    href: PropTypes.string,
    dispatch: PropTypes.func.isRequired
  }

  onClick () {
    const {dispatch} = this.props

    return function trigger (event) {
      const {target} = event
      const {href} = target

      event.preventDefault()

      return dispatch({type: "NAVIGATE", payload: {href}})
    }
  }

  render () {
    const {children} = this.props
    const {type} = this.props
    const {href} = this.props

    if (href) {
      return <button style={styles[type]}>
        {children}
      </button>
    }

    return <button>
      {children}
    </button>
  }

})
