import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import cxs from "cxs"

import Head from "./Head"
import Body from "./Body"
import Footer from "./Footer"

const pageStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  minHeight: "90vh",
  minWidth: 320,
  maxWidth: 1024,
}

export default class Layout extends PureComponent {
  static propTypes = {
    "children": PropTypes.node.isRequired,
    "data-component": PropTypes.string.isRequired,
    "style": PropTypes.object.isRequired,
    "title": PropTypes.string.isRequired,
    "subtitle": PropTypes.string.isRequired,
    "hasFooter": PropTypes.bool.isRequired,
  }

  static defaultProps = {
    title: "Lacqueristas",
    hasFooter: true,
    style: {},
  }

  render () {
    const {children} = this.props
    const {style} = this.props
    const {title} = this.props
    const {subtitle} = this.props
    const {hasFooter} = this.props
    const combineStyle = {
      ...pageStyle,
      ...style,
    }

    if (global.window) {
      return <main data-component="Layout">
        <section data-component={this.props["data-component"]} className={cxs(combineStyle)}>
          {children}
        </section>
        {hasFooter && <Footer />}
      </main>
    }

    return <html lang="en">
      <Head title={title} subtitle={subtitle} />
      <Body>
        <main data-component="Layout">
          <section data-component={this.props["data-component"]} className={cxs(combineStyle)}>
            {children}
          </section>
          {hasFooter && <Footer />}
        </main>
      </Body>
    </html>
  }
}
