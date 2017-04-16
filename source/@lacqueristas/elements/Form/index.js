import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import {createSelector} from "reselect"
import cxs from "cxs"
import {dispatched} from "@lacqueristas/signals"
import {formQuery} from "@lacqueristas/queries"
export default connect(
  createSelector(formQuery),
)(class Form extends PureComponent {
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
