import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"

import {clientSide} from "@lacqueristas/decorators"
import {authenticate} from "@lacqueristas/decorators"
import {Layout} from "@lacqueristas/ui"
import {Heading} from "@lacqueristas/elements"
import {Button} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"

import CreateProject from "./CreateProject"
import UploadPhotographs from "./UploadPhotographs"

export default authenticate(clientSide(connect()(class MakeAProject extends PureComponent {
  static propTypes = {dispatch: PropTypes.func.isRequired}
  static contextTypes = {signals: PropTypes.shape({draftProject: PropTypes.func.isRequired}).isRequired}

  onClickDraft (): Function {
    const {dispatch} = this.props
    const {signals} = this.context
    const {draftProject} = signals

    return function thunk (event: Event) {
      event.preventDefault()
      dispatch(draftProject())
    }
  }

  onClickReset (slug: string): Function {
    const {dispatch} = this.props
    const {signals} = this.context
    const {clearForm} = signals

    return function thunk () {
      event.preventDefault()
      dispatch(clearForm(slug))
    }
  }

  render (): any {
    return <Layout subtitle="Making a project" data-component="MakeAProject">
      <Heading kind="page">
        Make a Project
      </Heading>

      <CreateProject />

      <UploadPhotographs />

      <ButtonGroup>
        <Button kind="primary" type="submit">
          Publish!
        </Button>
        <Button kind="secondary" onClick={this.onClickDraft()}>
          Save as draft
        </Button>
        <Button kind="secondary" type="reset" onClick={this.onClickReset("makeAProject")}>
          Let this go
        </Button>
      </ButtonGroup>
    </Layout>
  }
})))
