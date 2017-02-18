import React, {PropTypes, PureComponent} from "react"

export default class WelcomeMessage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render () {
    const {name} = this.props

    return <p>
      Welcome to Lacqueristas, {name}!
    </p>
  }
}
