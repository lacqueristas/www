import React, {PureComponent, PropTypes} from "react"
import cxs from "cxs"
import {connect} from "react-redux"
import {mergeDeep} from "ramda-extra"

import {primaryInteraction} from "@lacqueristas/styles"
import {secondaryInteraction} from "@lacqueristas/styles"

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

export default connect()(class Anchor extends PureComponent {
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

  onClick (): Function {
    const {clickAnchor} = this.props

    return function trigger (event: Event) {
      const {target} = event
      const {metaKey} = event
      const {nativeEvent} = event
      const {which} = nativeEvent
      const {href} = target
      const isOpeningNewInstance = metaKey || which === MIDDLE_CLICK

      if (!isOpeningNewInstance) {
        event.preventDefault()

        clickAnchor(href)
      }
    }
  }

  render (): any {
    const {children} = this.props
    const {href} = this.props
    const {style} = this.props
    const {kind} = this.props
    const combineStyle = mergeDeep(
      styles[kind],
      style
    )

    return <a href={href} className={cxs(combineStyle)} onClick={this.onClick()}>
      {children}
    </a>
  }
})
