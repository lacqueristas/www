import React, {PureComponent, PropTypes} from "react"
import {connect} from "react-redux"

import {primaryInteraction} from "../styles"

const styles = {
  primary: {
    ...primaryInteraction
  },
  normal: {}
}
const MIDDLE_CLICK = 0

export default connect()(class Anchor extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
    href: PropTypes.string.isRequired,
    kind: PropTypes.oneOf(["primary", "normal"]).isRequired
  }

  static defaultProps = {
    style: {}
  }

  static contextTypes = {
    signals: PropTypes.shape({
      clickAnchor: global.window ? PropTypes.func.isRequired : PropTypes.func
    }).isRequired
  }

  onClick () {
    const {dispatch} = this.props
    const {signals: {clickAnchor}} = this.context

    return function trigger (event) {
      const {target} = event
      const {metaKey} = event
      const {nativeEvent} = event
      const {which} = nativeEvent
      const {href} = target
      const isOpeningNewInstance = metaKey || which === MIDDLE_CLICK

      if (!isOpeningNewInstance) {
        event.preventDefault()

        return dispatch(clickAnchor(href))
      }

      return null
    }
  }

  render () {
    const {children} = this.props
    const {href} = this.props
    const {style} = this.props
    const {kind} = this.props

    return <a href={href} style={{...styles[kind], ...style}} onClick={this.onClick()}>
      {children}
    </a>
  }
})
