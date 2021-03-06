import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"

import {Anchor} from "@internal/elements"

export default class WelcomeMessage extends PureComponent {
  static propTypes = {name: PropTypes.string.isRequired}

  render () {
    const {name} = this.props

    return <p>
      Welcome to Lacqueristas, {name}! This will be your front page for Lacqueristas. You can view your notifications above, or your projects below. We suggest <Anchor href="/make-a-project">making a project</Anchor>.
    </p>
  }
}
