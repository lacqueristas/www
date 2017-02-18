import React, {PureComponent, PropTypes} from "react"

import Head from "../Head"
import Body from "../Body"
import Footer from "../Footer"


const styles = {
  main: {
    minHeight: 400,
  },
}

export default class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    hasFooter: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    hasFooter: true,
  }

  render () {
    const {children} = this.props
    const {title} = this.props
    const {subtitle} = this.props
    const {hasFooter} = this.props

    if (global.window) {
      return <main data-component="Layout">
        {children}
        {hasFooter && <Footer />}
      </main>
    }

    return <html lang="en">
      <Head title={title} subtitle={subtitle} />
      <Body>
        <main data-component="Layout" style={styles.main}>
          {children}
          {hasFooter && <Footer />}
        </main>
      </Body>
    </html>
  }
}
