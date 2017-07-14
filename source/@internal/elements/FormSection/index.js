import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import cxs from "cxs"
import mergeDeepRight from "@unction/mergedeepright"
import {createStructuredSelector} from "reselect"
import {formSectionQuery} from "@internal/selectors"
import {updateInputSignal} from "@internal/signals"

const baseStyle = {
  display: "flex",
  flexDirection: "column",
}

@connect(
  createStructuredSelector({...formSectionQuery}),
  {updateInput: updateInputSignal}
)
export default class FormSection extends PureComponent {
  static propTypes = {
    updateInput: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
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
  }

  state = {}

  onChangeInput = (event) => {
    const {slug} = this.props
    const {updateInput} = this.props
    const {target} = event
    const {name} = target
    const {value} = target

    this.setState({value})

    updateInput({
      slug,
      name,
      value,
    })
  }

  render () {
    const {id} = this.props
    const {name} = this.props
    const {type} = this.props
    const {label} = this.props
    const {required} = this.props
    const {style} = this.props
    const {value: initialValue} = this.props
    const {value: localValue = initialValue} = this.state
    const combineStyle = mergeDeepRight(baseStyle)(style)

    return <section className={cxs(combineStyle)}>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? <textarea id={id} name={name} required={required} onChange={this.onChangeInput} defaultValue={localValue} /> : <input id={id} name={name} type={type} required={required} onChange={this.onChangeInput} value={localValue} />}
    </section>
  }
}
