import React, {PureComponent, PropTypes} from "react"
import {forEach} from "ramda"
import Dropzone from "react-dropzone"
import {connect} from "react-redux"

const withPhotographs = connect((state, props) => {
  return {
    ...props,
  }
})

export default withPhotographs(class UploadPhotographs extends PureComponent {
  static propTypes = {
    photographs: PropTypes.arrayOf(PropTypes.shape({
      attributes: PropTypes.shape({
        "src": PropTypes.string,
        "project-id": PropTypes.string,
        "created-at": PropTypes.string,
        "updated-at": PropTypes.string,
      }).isRequired,
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  static defaultProps = {photographs: []}
  static contextTypes = {
    signals: PropTypes.shape({
      clearForm: PropTypes.func.isRequired,
      updateInput: PropTypes.func.isRequired,
      errorInput: PropTypes.func.isRequired,
    }).isRequired,
  }

  onDrop (slug: string): Function {
    const {dispatch} = this.props
    const {signals} = this.context
    const {updateInput} = signals
    const {errorInput} = signals

    // TODO: Either make it so update input takes an adidtional top level resourec ("project", "photographs") or something else
    // TODO: Switch back to destructured, makes the most sense to me IMO.
    // TODO: Figure out ho to take a file and turn it into a photograph and where that should happen
    // TODO: Turn this entire thunk into an action that promise.all
    // TODO: Maybe all thunks for handlers are just dispatched actions?
    return function thunk (accepted: Array<any>, rejected: Array<any>) {
      forEach((file: any): any => dispatch(updateInput(slug, "photographs", file, true)), accepted)
      forEach((file: any): any => dispatch(errorInput(slug, "photographs", file)), rejected)
    }
  }

  render (): any {
    return <Dropzone onDrop={this.onDrop()}>
      <p>
        Drag &amp; drop your photographs.
      </p>
    </Dropzone>
  }
})
