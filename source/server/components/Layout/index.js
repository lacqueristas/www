import React, {Component, PropTypes} from "react"

import Head from "./Head"
import Body from "./Body"

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string
  }

  render () {
    const {children} = this.props
    const {title} = this.props
    const {subtitle} = this.props

    if (global.window) {
      return <div>{children}</div>
    }

    return <html lang="en">
      <Head title={title} subtitle={subtitle} />
      <Body>
        {children}
      </Body>
    </html>
  }
}
