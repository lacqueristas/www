import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import cxs from "cxs"
import {query} from "@lacqueristas/queries"
import {formQuery} from "@lacqueristas/queries"

export default connect(
  query([formQuery]),
)(class Form extends PureComponent {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
  }

  static defaultProps = {style: {}}

  onSubmitForm (): Function {
    return function thunk (event: Event) {
      const {slug} = this.props
      const {onSubmit} = this.props

      event.preventDefault()

      onSubmit(slug)
    }.bind(this)
  }

  render (): any {
    const {name} = this.props
    const {slug} = this.props
    const {children} = this.props
    const {style} = this.props

    return <form data-component={name} onSubmit={this.onSubmitForm()} data-slug={slug} name={name} className={cxs(style)}>
      {children}
    </form>
  }
})
