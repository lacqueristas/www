import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
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
    children: PropTypes.node.isRequired,
    uploadFiles: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }

  onDrop () {
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

  render () {
    const {children} = this.props

    return <Dropzone onDrop={this.onDrop()}>
      {children}
    </Dropzone>
  }
})
