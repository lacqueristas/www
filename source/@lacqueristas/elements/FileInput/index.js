import React, {PureComponent, PropTypes} from "react"
import Dropzone from "react-dropzone"
import {connect} from "react-redux"
import {onlyProps} from "@lacqueristas/queries"
import {dispatched} from "@lacqueristas/signals"
import {uploadFilesSignal} from "@lacqueristas/signals"


export default connect(
  onlyProps,
  dispatched({uploadFiles: uploadFilesSignal})
)(class FileInput extends PureComponent {
  static propTypes = {
    uploadFiles: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }

  onDrop (): Function {
    return function thunk (accepted: Array<any>, rejected: Array<any>) {
      const {uploadFiles} = this.props
      const {slug} = this.props
      const {id} = this.props

      uploadFiles({
        slug,
        name: id,
        accepted,
        rejected,
      })
    }.bind(this)
  }

  render (): any {
    return <Dropzone onDrop={this.onDrop()}>
      <p>
        Drag &amp; drop your files here.
      </p>
    </Dropzone>
  }
})
