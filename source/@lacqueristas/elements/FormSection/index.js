import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import cxs from "cxs"
import {mergeDeep} from "ramda-extra"
import {path} from "ramda"

const baseStyle = {
  display: "flex",
  flexDirection: "column",
}
const withForm = connect((state: StateType, props: mixed): mixed => {
  const {slug} = props
  const {id} = props
  const value = path(["ephemeral", "forms", slug, id], state)

  return {
    ...props,
    name: id,
    value,
  }
})

export default withForm(class FormSection extends PureComponent {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    required: false,
    stored: false,
    style: {},
    value: "",
  }

  state = {}

  state: {
    value: string | number
  }

  static contextTypes = {signals: PropTypes.shape({updateInput: PropTypes.func.isRequired}).isRequired}

  onChangeInput (): Function {
    const {dispatch} = this.props
    const {slug} = this.props
    const {signals} = this.context
    const {updateInput} = signals

    return function thunk (event: Event) {
      const {target} = event
      const {name} = target
      const {value} = target

      this.setState({value})

      dispatch(updateInput(slug, name, value))
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
    const combineStyle = mergeDeep(baseStyle, style)

    return <section className={cxs(combineStyle)}>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? <textarea id={id} name={name} required={required} onChange={this.onChangeInput()} defaultValue={localValue} /> : <input id={id} name={name} type={type} required={required} onChange={this.onChangeInput()} value={localValue} />}
    </section>
  }
})
