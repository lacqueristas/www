import React, {PureComponent, PropTypes} from "react"
import Dropzone from "react-dropzone"
import {connect} from "react-redux"

const withPhotographs = connect((state: StateType, props: any): any => {
  return {...props}
})

export default withPhotographs(class UploadPhotographs extends PureComponent {
  static propTypes = {
    manageFiles: PropTypes.func.isRequired,
    photographs: PropTypes.arrayOf(PropTypes.shape({
      attributes: PropTypes.shape({
        "src": PropTypes.string,
        "project-id": PropTypes.string,
        "created-at": PropTypes.string,
        "updated-at": PropTypes.string,
      }).isRequired,
    })).isRequired,
  }
  static defaultProps = {photographs: []}

  onDrop (slug: string): Function {
    const {manageFiles} = this.props

    return function thunk (accepted: Array<any>, rejected: Array<any>) {
      manageFiles({
        slug,
        name: "photographs",
        accepted,
        rejected,
      })
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
