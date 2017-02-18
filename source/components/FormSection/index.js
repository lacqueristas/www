import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"
import cxs from "cxs"
import {mergeDeep} from "ramda-extra"
import {path} from "ramda"

const baseStyle = {
  display: "flex",
  flexDirection: "column",
}
const withForm = connect((state, props) => {
  const {slug} = props
  const {id} = props
  const value = path(["ephemeral", "forms", slug, id], state)

  return {
    ...props,
    value,
  }
})

export default withForm(class FormSection extends PureComponent {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.any,
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
  }

  static contextTypes = {
    signals: PropTypes.shape({
      updateInput: global.window ? PropTypes.func.isRequired : PropTypes.func,
    }).isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {}
  }

  onChangeInput () {
    const {dispatch} = this.props
    const {slug} = this.props
    const {signals} = this.context
    const {updateInput} = signals

    return function thunk (event) {
      const {target} = event
      const {name} = target
      const {value} = target

      this.setState({value})

      return dispatch(updateInput({slug, name, value}))
    }.bind(this)
  }

  render () {
    const {id} = this.props
    const {name} = this.props
    const {type} = this.props
    const {label} = this.props
    const {required} = this.props
    const {style} = this.props
    const {value: initialValue} = this.props
    const {value: localValue} = this.state

    return <section className={cxs(mergeDeep(baseStyle, style))}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name || id} type={type} required={required} value={initialValue || localValue} onChange={this.onChangeInput()} />
    </section>
  }
})
