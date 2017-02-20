import React, {PropTypes, PureComponent} from "react"
import cxs from "cxs"
import {mergeDeep} from "ramda-extra"

const baseStyle = {
  display: "flex",
  flexDirection: "column",
}

export default class NativeFormSection extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }

  static defaultProps = {
    required: false,
    style: {},
    name: null,
    value: "",
  }

  render () {
    const {id} = this.props
    const {name} = this.props
    const {type} = this.props
    const {label} = this.props
    const {required} = this.props
    const {style} = this.props
    const {value} = this.props
    const className = cxs(mergeDeep(baseStyle, style))

    return <section className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name || id} type={type} required={required} value={value} />
    </section>
  }
}
