import React, {PureComponent, PropTypes} from "react"
import cxs from "cxs"
import mergeDeepRight from "@unction/mergedeepright"
import {prop} from "ramda"

import {secondaryText as secondaryTextColor} from "@lacqueristas/colors"

const headings = {
  page: "h1",
  section: "h2",
}
const headingsStyle = {
  page: {fontFamily: "'Handlee', cursive"},
  section: {fontFamily: "'Open Sans', sans-serif"},
}
const subtitlesStyle = {
  page: {color: secondaryTextColor},
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

  render (): any {
    const {children} = this.props
    const {customHeadingsStyle} = this.props
    const {customSubtitlesStyle} = this.props
    const {kind} = this.props
    const {subtitle} = this.props
    const HeadingElement = headings[kind]
    const combineHeadingStyle = mergeDeepRight(prop(kind)(headingsStyle))(customHeadingsStyle)
    const combineSubtitleStyle = mergeDeepRight(prop(kind)(subtitlesStyle))(customSubtitlesStyle)

    return <header data-component="Heading">
      <HeadingElement data-component="Heading" data-kind={kind} className={cxs(combineHeadingStyle)}>
        {children}
      </HeadingElement>
      {subtitle && <p className={cxs(combineSubtitleStyle)}>{subtitle}</p>}
    </header>
  }
}
