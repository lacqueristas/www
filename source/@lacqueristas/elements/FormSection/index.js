import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import cxs from "cxs"
import mergeDeepRight from "@unction/mergedeepright"
import {query} from "@lacqueristas/queries"
import {formSectionQuery} from "@lacqueristas/queries"
import {dispatched} from "@lacqueristas/signals"
import {updateInputSignal} from "@lacqueristas/signals"

const baseStyle = {
  display: "flex",
  flexDirection: "column",
}

export default connect(
  query([formSectionQuery]),
  dispatched({updateInput: updateInputSignal}),
)(class FormSection extends PureComponent {
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

  state: {
    value: any
  }

  onChangeInput (): Function {
    return function thunk (event: Event) {
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
    const combineStyle = mergeDeepRight(baseStyle)(style)

    return <section className={cxs(combineStyle)}>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? <textarea id={id} name={name} required={required} onChange={this.onChangeInput()} defaultValue={localValue} /> : <input id={id} name={name} type={type} required={required} onChange={this.onChangeInput()} value={localValue} />}
    </section>
  }
})
