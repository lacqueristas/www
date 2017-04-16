import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import cxs from "cxs"

const withForm = connect((state: StateType, props: object): object => {
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
    action: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }

  static defaultProps = {style: {}}

  onSubmitForm (): Function {
    const {slug} = this.props
    const {action} = this.props
    const signal = actions[action]

    return function thunk (event: Event) {
      event.preventDefault()

      signal(slug)
    }
  }

  render (): any {
    const {name} = this.props
    const {action} = this.props
    const {slug} = this.props
    const {children} = this.props
    const {style} = this.props

    return <form data-component={name} onSubmit={this.onSubmitForm()} data-action={action} data-slug={slug} name={name} className={cxs(style)}>
      {children}
    </form>
  }
})
