import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import cxs from "cxs"
import {createStructuredSelector} from "reselect"
import {formQuery} from "@internal/selectors"

@connect(
  createStructuredSelector({...formQuery})
)
export default class Form extends PureComponent {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
  }

  static defaultProps = {style: {}}

  onSubmitForm = (event) => {
    const {slug} = this.props
    const {onSubmit} = this.props

    event.preventDefault()

    onSubmit(slug)
  }

  render () {
    const {name} = this.props
    const {slug} = this.props
    const {children} = this.props
    const {style} = this.props

    return <form data-component={name} onSubmit={this.onSubmitForm} data-slug={slug} name={name} className={cxs(style)}>
      {children}
    </form>
  }
}
