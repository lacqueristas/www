import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"

import {clientSide} from "@lacqueristas/decorators"
import {authenticate} from "@lacqueristas/decorators"
import {Layout} from "@lacqueristas/ui"
import {Heading} from "@lacqueristas/elements"
import {Button} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"
import {onlyProps} from "@lacqueristas/queries"
import {dispatched} from "@lacqueristas/signals"
import {clearFormSignal} from "@lacqueristas/signals"
import {createProjectSignal} from "@lacqueristas/signals"

import UploadPhotographs from "./UploadPhotographs"

const slug = "makeAProject"

export default authenticate(clientSide(connect(
  onlyProps,
  dispatched({
    clearForm: clearFormSignal,
    createProject: createProjectSignal,
  })
)(class MakeAProject extends PureComponent {
  static propTypes = {
    draftProject: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    project: PropTypes.shape({
      attributes: PropTypes.shape({
        "name": PropTypes.string,
        "description": PropTypes.string,
        "painted-at": PropTypes.string,
      }).isRequired,
    }).isRequired,
  }
  static defaultProps = {
    project: {
      attributes: {
        "name": "",
        "description": "",
        "painted-at": (new Date()).toISOString(),
      },
    },
  }

  onClickDraft (): Function {
    return function thunk (event: Event) {
      const {draftProject} = this.props

      event.preventDefault()

      draftProject()
    }.bind(this)
  }

  onClickReset (): Function {
    return function thunk () {
      const {clearForm} = this.props

      event.preventDefault()

      clearForm(slug)
    }.bind(this)
  }

  render (): any {
    const {createProject} = this.props
    const {project} = this.props
    const {attributes} = project
    const {name} = attributes
    const {description} = attributes
    const paintedAt = attributes["painted-at"]

    return <Layout subtitle="Making a project" data-component="MakeAProject">
      <Heading kind="page">
        Make a Project
      </Heading>

        <UploadPhotographs />
      <Form name="MakeAProjectForm" onSubmit={createProject} slug={slug}>
        <FormSection id="name" type="text" required label="What do you call this project?" slug={slug} value={name} />
        <FormSection id="description" type="textarea" required label="All the details" slug={slug} defaultValue={description} />
        <FormSection id="painted-at" type="date" required label="When did you do it?" slug={slug} value={paintedAt} />

        <ButtonGroup>
          <Button kind="primary" type="submit">
            Publish!
          </Button>
          <Button kind="secondary" onClick={this.onClickDraft()}>
            Save as draft
          </Button>
          <Button kind="secondary" type="reset" onClick={this.onClickReset()}>
            Let this go
          </Button>
        </ButtonGroup>
      </Form>
    </Layout>
  }
})))
