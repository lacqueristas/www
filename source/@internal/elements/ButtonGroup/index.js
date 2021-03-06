/* eslint-disable id-length */

import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import cxs from "cxs"

const style = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  button: {margin: 2},
  a: {margin: 2},
}

export default class ButtonGroup extends PureComponent {
  static propTypes = {children: PropTypes.node.isRequired}

  render () {
    const {children} = this.props

    return <section className={cxs(style)}>
      {children}
    </section>
  }
}
