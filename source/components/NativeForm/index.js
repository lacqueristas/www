import React, {PropTypes, PureComponent} from "react"
import cxs from "cxs"

export default class NativeForm extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    target: PropTypes.string,
    children: PropTypes.node.isRequired,
    action: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }

  static defaultProps = {
    style: {},
    target: null,
  }

  render () {
    const {children} = this.props
    const {action} = this.props
    const {target} = this.props
    const {style} = this.props
    const {name} = this.props
    const className = cxs(style)

    return <form data-component={name} action={action} method="post" name={name} target={target} className={className}>
      {children}
    </form>
  }
}
