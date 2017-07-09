import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import cxs from "cxs"
import {connect} from "react-redux"
import {prop} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"
import {onlyProps} from "@internal/queries"
import {dispatched} from "@internal/signals"
import {clickAnchorSignal} from "@internal/signals"
import {primaryInteraction} from "@internal/styles"
import {secondaryInteraction} from "@internal/styles"

const styles = {
  primary: primaryInteraction,
  secondary: secondaryInteraction,
  normal: {},
}
const MIDDLE_CLICK = 0
const kinds = [
  "primary",
  "secondary",
  "normal",
]

export default connect(
  onlyProps,
  dispatched({clickAnchor: clickAnchorSignal})
)(class Anchor extends PureComponent {
  static propTypes = {
    clickAnchor: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
    href: PropTypes.string.isRequired,
    kind: PropTypes.oneOf(kinds).isRequired,
  }

  static defaultProps = {
    style: {},
    kind: "normal",
  }

  static contextTypes = {signals: PropTypes.shape({clickAnchor: PropTypes.func})}

  onClick () {
    return function thunk (event: Event) {
      const {clickAnchor} = this.props
      const {target} = event
      const {metaKey} = event
      const {nativeEvent} = event
      const {which} = nativeEvent
      const {href} = target
      const isOpeningNewInstance = metaKey || which === MIDDLE_CLICK

      if (!isOpeningNewInstance) {
        event.preventDefault()

        return clickAnchor(href)
      }

      return true
    }.bind(this)
  }

  render () {
    const {children} = this.props
    const {href} = this.props
    const {style} = this.props
    const {kind} = this.props
    const combineStyle = mergeDeepRight(prop(kind)(styles))(style)

    return <a href={href} className={cxs(combineStyle)} onClick={this.onClick()}>
      {children}
    </a>
  }
})
