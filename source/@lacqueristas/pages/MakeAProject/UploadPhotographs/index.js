import React, {PureComponent, PropTypes} from "react"
import {map} from "ramda"
import Dropzone from "react-dropzone"
import {connect} from "react-redux"

const withPhotographs = connect((state: StateType, props: any): any => {
  return {...props}
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
    const {manageFiles} = signals

    return function thunk (accepted: Array<any>, rejected: Array<any>) {
      dispatch(manageFiles({
        slug,
        name: "photographs",
        accepted,
        rejected,
      }))
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
