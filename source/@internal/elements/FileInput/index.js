import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import Dropzone from "react-dropzone"
import {connect} from "react-redux"
import {onlyProps} from "@internal/selectors"
import {uploadFilesSignal} from "@internal/signals"

@connect(
  onlyProps,
  {uploadFiles: uploadFilesSignal}
)
export default class FileInput extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    uploadFiles: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }

  onDrop = (accepted, rejected) => {
    const {uploadFiles} = this.props
    const {slug} = this.props
    const {id} = this.props

    uploadFiles({
      slug,
      name: id,
      accepted,
      rejected,
    })
  }

  render () {
    const {children} = this.props

    return <Dropzone onDrop={this.onDrop}>
      {children}
    </Dropzone>
  }
}
