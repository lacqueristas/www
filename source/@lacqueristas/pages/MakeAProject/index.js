import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import {clientSide} from "@lacqueristas/decorators"
import {authenticate} from "@lacqueristas/decorators"
import {Layout} from "@lacqueristas/ui"
import {Heading} from "@lacqueristas/elements"
import {Button} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"
import {FileInput} from "@lacqueristas/elements"
import {dispatched} from "@lacqueristas/signals"
import {clearFormSignal} from "@lacqueristas/signals"
import {createProjectSignal} from "@lacqueristas/signals"
import {query} from "@lacqueristas/queries"
import {fieldQuery} from "@lacqueristas/queries"


const slug = "makeAProject"

export default authenticate(clientSide(connect(
  query([fieldQuery([slug, "photographs"])]),
  dispatched({
    clearForm: clearFormSignal,
    createProject: createProjectSignal,
  })
)(class MakeAProject extends PureComponent {
  static propTypes = {
    draftProject: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    photographs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }

  static defaultProps = {photographs: []}

  onClickDraft () {
    return function thunk (event: Event) {
      const {draftProject} = this.props

      event.preventDefault()

      draftProject()
    }.bind(this)
  }

  onClickReset () {
    return function thunk () {
      const {clearForm} = this.props

      event.preventDefault()

      clearForm(slug)
    }.bind(this)
  }

  render (){
    const {createProject} = this.props
    const {photographs} = this.props

    return <Layout subtitle="Making a project" data-component="MakeAProject">
      <Heading kind="page">
        Make a Project
      </Heading>

      <Form name="MakeAProjectForm" onSubmit={createProject} slug={slug}>
        <FormSection id="name" type="text" required label="What do you call this project?" slug={slug} />
        <FormSection id="description" type="textarea" required label="All the details" slug={slug} />
        <FormSection id="painted-at" type="date" required label="When did you do it?" slug={slug} />
        <FileInput id="photographs" slug={slug}>
          {JSON.stringify(photographs)}
        </FileInput>

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
