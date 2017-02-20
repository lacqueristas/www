import React, {PureComponent, PropTypes} from "react"
import cxs from "cxs"
import {connect} from "react-redux"
import {mergeDeep} from "ramda-extra"

import {primaryInteraction} from "../styles"
import {secondaryInteraction} from "../styles"

const styles = {
  primary: primaryInteraction,
  secondary: secondaryInteraction,
}
const kinds = [
  "primary",
  "secondary",
  "normal",
]

// TODO: Hook up to ui loading state
export default connect()(class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
    kind: PropTypes.oneOf(kinds).isRequired,
    type: PropTypes.oneOf(["submit", "reset"]).isRequired,
  }

  static defaultProps = {
    style: {},
    kind: "normal",
  }

  render () {
    const {children} = this.props
    const {kind} = this.props
    const {type} = this.props
    const {style} = this.props
    const combineStyle = mergeDeep(
      styles[kind],
      style
    )

    return <button type={type} className={cxs(combineStyle)}>
      {children}
    </button>
  }
})
