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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }

  static defaultProps = {
    required: false,
    style: {},
    value: "",
    name: null,
  }

  state = {}

  state: {
    value: string | number
  }

  onChangeInput (): Function {
    return function thunk (event: Event) {
      const {target} = event
      const {value} = target

      this.setState({value})
    }.bind(this)
  }

  render (): any {
    const {id} = this.props
    const {name} = this.props
    const {type} = this.props
    const {label} = this.props
    const {required} = this.props
    const {style} = this.props
    const {value: initialValue} = this.props
    const {value: localValue = initialValue} = this.state
    const className = mergeDeep(baseStyle, style)

    return <section className={cxs(className)}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name || id} type={type} required={required} onChange={this.onChangeInput()} value={localValue} />
    </section>
  }
}
