import React, {PureComponent, PropTypes} from "react"

import {secondaryText as secondaryTextColor} from "../colors"

const headings = {
  page: "h1",
  section: "h2"
}
const headingsStyle = {
  page: {
    fontFamily: "'Handlee', cursive"
  },
  section: {
    fontFamily: "'Open Sans', sans-serif"
  }
}
const subtitlesStyle = {
  page: {
    color: secondaryTextColor,
    textAlign: "center"
  },
  section: {
    color: secondaryTextColor
  }
}

export default class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    customHeadingsStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    customSubtitlesStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    kind: PropTypes.oneOf(["page", "section"]).isRequired
  }

  static defaultProps = {
    customHeadingsStyle: {},
    customSubtitlesStyle: {}
  }

  render () {
    const {children} = this.props
    const {customHeadingsStyle} = this.props
    const {customSubtitlesStyle} = this.props
    const {kind} = this.props
    const {subtitle} = this.props
    const HeadingElement = headings[kind]

    return <header data-component="Heading">
      <HeadingElement data-component="Heading" className={`Heading-${kind}`} style={{...customHeadingsStyle, ...headingsStyle[kind]}}>
        {children}
      </HeadingElement>
      {
        subtitle && <p className={`Heading-${kind}-subtitle`} style={{...customSubtitlesStyle, ...subtitlesStyle[kind]}}>{subtitle}</p>
      }
    </header>
  }
}
