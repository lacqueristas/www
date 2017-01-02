import React, {PureComponent, PropTypes} from "react"

const headings = {
  page: "h1",
  section: "h2"
}

export default class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    kind: PropTypes.oneOf(["page", "section"]).isRequired
  }

  static defaultProps = {
    style: {}
  }

  render () {
    const {children} = this.props
    const {style} = this.props
    const {kind} = this.props
    const {subtitle} = this.props
    const HeadingElement = headings[kind]

    return <header>
      <HeadingElement className={`Heading-${kind}`} style={{...style}}>
        {children}
      </HeadingElement>
      {
        subtitle && <p className={`Heading-${kind}-subtitle`}>
          {subtitle}
        </p>
      }
    </header>
  }
}
