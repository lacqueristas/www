import React, {PropTypes, PureComponent} from "react"
import {connect} from "react-redux"

import {clientSide} from "@lacqueristas/decorators"
import {authenticate} from "@lacqueristas/decorators"
import {Layout} from "@lacqueristas/ui"
import {Heading} from "@lacqueristas/elements"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"
import {Button} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"

export default authenticate(clientSide(connect()(class MakeAProject extends PureComponent {
  static propTypes = {
    project: PropTypes.shape({
      attributes: PropTypes.shape({
        "name": PropTypes.string.isRequired,
        "description": PropTypes.string.isRequired,
        "painted-at": PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
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
  static contextTypes = {signals: PropTypes.object.isRequired}

  onClickDraft (): Function {
    const {dispatch} = this.props

    return function thunk (event: Event) {
      dispatch()
    }
  }

  onClickReset (slug: string): Function {
    const {dispatch} = this.props
    const {signals} = this.context
    const {clearForm} = signals

    return function thunk () {
      dispatch(clearForm(slug))
    }
  }

  render (): any {
    const {project} = this.props
    const {attributes} = project
    const {name} = attributes
    const {description} = attributes
    const paintedAt = attributes["painted-at"]

    return <Layout subtitle="Making a project" data-component="MakeAProject">
      <Heading kind="page">
        Make a Project
      </Heading>

      <Form name="MakeAProjectForm" action="createProject" slug="makeAProject">
        <FormSection id="name" type="text" required label="What do you call this project?" slug="makeAProject" value={name} />
        <FormSection id="description" type="textarea" required label="All the details" slug="makeAProject" defaultValue={description} />
        <FormSection id="painted-at" type="date" required label="When did you do it?" slug="makeAProject" value={paintedAt} />

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
      </Form>
    </Layout>
  }
})))
