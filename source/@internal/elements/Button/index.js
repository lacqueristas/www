import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import cxs from "cxs"
import {connect} from "react-redux"
import {prop} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"

import {primaryInteraction} from "@internal/styles"
import {secondaryInteraction} from "@internal/styles"

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
@connect()
export default class Button extends PureComponent {
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
    onClick: () => null,
  }

  render () {
    const {children} = this.props
    const {kind} = this.props
    const {type} = this.props
    const {onClick} = this.props
    const {style} = this.props
    const combineStyle = mergeDeepRight(prop(kind)(styles))(style)

    return <button type={type} className={cxs(combineStyle)} onClick={onClick}>
      {children}
    </button>
  }
}
