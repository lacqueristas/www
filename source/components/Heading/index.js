import React, {PureComponent, PropTypes} from "react"

export default class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
    kind: PropTypes.oneOf(["page", "section"]).isRequired
  }

  static defaultProps = {
    style: {}
  }

  render () {
    const {children} = this.props
    const {style} = this.props
    const {kind} = this.props

    switch (kind) {
      case "page": {
        return <h1 style={{...style}}>
          {children}
        </h1>
      }
      case "section": {
        return <h2 style={{...style}}>
          {children}
        </h2>
      }
      default: {
        throw new Error("Headings must have a type")
      }
    }
  }
}
