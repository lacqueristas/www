import React, {PureComponent, PropTypes} from "react"
import cxs from "cxs"
import {mergeDeep} from "ramda-extra"

import {secondaryText as secondaryTextColor} from "../colors"

const headings = {
  page: "h1",
  section: "h2",
}
const headingsStyle = {
  page: {fontFamily: "'Handlee', cursive"},
  section: {fontFamily: "'Open Sans', sans-serif"},
}
const subtitlesStyle = {
  page: {
    color: secondaryTextColor,
    textAlign: "center",
  },
  section: {color: secondaryTextColor},
}

export default class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    customHeadingsStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    customSubtitlesStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    kind: PropTypes.oneOf(["page", "section"]).isRequired,
  }

  static defaultProps = {
    customHeadingsStyle: {},
    customSubtitlesStyle: {},
    subtitle: null,
  }

  render () {
    const {children} = this.props
    const {customHeadingsStyle} = this.props
    const {customSubtitlesStyle} = this.props
    const {kind} = this.props
    const {subtitle} = this.props
    const HeadingElement = headings[kind]
    const combineHeadingStyle = mergeDeep(
      headingsStyle[kind],
      customHeadingsStyle
    )
    const combineSubtitleStyle = mergeDeep(
      subtitlesStyle[kind],
      customSubtitlesStyle
    )

    return <header data-component="Heading">
      <HeadingElement data-component="Heading" data-kind={kind} className={cxs(combineHeadingStyle)}>
        {children}
      </HeadingElement>
      {subtitle && <p className={cxs(combineSubtitleStyle)}>{subtitle}</p>}
    </header>
  }
}
