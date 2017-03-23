import React, {PureComponent, PropTypes} from "react"
import cxs from "cxs"
import {connect} from "react-redux"
import {mergeDeep} from "ramda-extra"

import {primaryInteraction} from "@lacqueristas/styles"
import {secondaryInteraction} from "@lacqueristas/styles"

const styles = {
  primary: primaryInteraction,
  secondary: secondaryInteraction,
}
const kinds = [
  "primary",
  "secondary",
  "normal",
]
const types = [
  "submit",
  "button",
  "reset",
]

// TODO: Hook up to ui loading state
export default connect()(class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
    kind: PropTypes.oneOf(kinds).isRequired,
    type: PropTypes.oneOf(types).isRequired,
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    style: {},
    kind: "normal",
    type: "button",
    onClick: (): any => null,
  }

  render (): any {
    const {children} = this.props
    const {kind} = this.props
    const {type} = this.props
    const {onClick} = this.props
    const {style} = this.props
    const combineStyle = mergeDeep(
      styles[kind],
      style
    )

    return <button type={type} className={cxs(combineStyle)} onClick={onClick}>
      {children}
    </button>
  }
})
