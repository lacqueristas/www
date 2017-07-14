import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import cxs from "cxs"

import {neutral} from "@internal/colors"

import GoogleTagManager from "./GoogleTagManager"
import JavascriptWarning from "./JavascriptWarning"

const style = {
  backgroundColor: neutral,
  fontSize: 18,
}

export default class Body extends PureComponent {
  static propTypes = {children: PropTypes.node.isRequired}

  render () {
    const {children} = this.props

    return <body className={cxs(style)} id="application">
      <GoogleTagManager />

      <JavascriptWarning />

      {children}

      <script async type="text/javascript" src="/index.js" />
    </body>
  }
}
