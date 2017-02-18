import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import cxs from "cxs"

const withForm = connect((state, props) => {
  const {slug} = props
  const {ephemeral} = state
  const {forms} = ephemeral
  const attributes = forms[slug]

  return {
    ...props,
    ...attributes,
  }
})

export default withForm(class Form extends PureComponent {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }

  static defaultProps = {
    style: {},
  }

  static contextTypes = {
    signals: PropTypes.object.isRequired,
  }

  onSubmitForm () {
    const {dispatch} = this.props
    const {slug} = this.props
    const {action} = this.props
    const {signals} = this.context
    const signal = signals[action]

    return function thunk (event) {
      event.preventDefault()

      return dispatch(signal({slug}))
    }
  }

  render () {
    const {name} = this.props
    const {action} = this.props
    const {slug} = this.props
    const {children} = this.props
    const {style} = this.props
    const className = cxs(style)

    return <form data-component={name} onSubmit={this.onSubmitForm()} data-action={action} data-slug={slug} name={name} className={className}>
      {children}
    </form>
  }
})
