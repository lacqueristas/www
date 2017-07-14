import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {path} from "ramda"
import {createStructuredSelector} from "reselect"
import uriTemplates from "uri-templates"

import router from "@internal/router"

const template = uriTemplates("/{component}{/id}")

@connect(
  createStructuredSelector({
    pathname: path(["navigation", "pathname"]),
    session: path(["ephemeral", "current", "session"]),
    query: path(["navigation", "query"]),
  })
)
export default class Application extends PureComponent {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    session: PropTypes.string,
    query: PropTypes.object,
  }

  render () {
    const {pathname} = this.props
    const {query} = this.props
    const {session} = this.props
    const CurrentComponent = router({
      pathname,
      session,
    })

    if (pathname || pathname !== "/") {
      const {id} = template.fromUri(pathname)

      return <CurrentComponent id={id} {...query} />
    }

    return <CurrentComponent {...query} />
  }
}
