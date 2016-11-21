import React, {Component, PropTypes} from "react"

export default class Heading extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
  }

  static defaultProps = {
    style: {}
  }

  render () {
    const {children} = this.props
    const {style} = this.props
    const {type} = this.props

    switch (type) {
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
