import React, {PropTypes, PureComponent} from "react"
import {clientSide} from "@lacqueristas/decorators"
import {authenticate} from "@lacqueristas/decorators"
import {Layout} from "@lacqueristas/ui"
import {Heading} from "@lacqueristas/elements"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"
import {Button} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"

export default authenticate(clientSide(class MakeAProject extends PureComponent {
  static propTypes = {
    project: PropTypes.shape({
      attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }
  static defaultProps = {
    project: {
      attributes: {
        name: "",
        description: "",
      },
    },
  }

  onClickSaveAsDraft (): any {
    const {dispatch} = this.props

    return function thunk (event: Event) {
      dispatch()
    }
  }

  render (): any {
    const {project} = this.props
    const {attributes} = project
    const {name} = attributes
    const {description} = attributes

    return <Layout subtitle="Making a project" data-component="MakeAProject">
      <Heading kind="page">
        Make a Project
      </Heading>

      <Form name="MakeAProjectForm" action="createProject" slug="makeAProject">
        <FormSection id="name" type="text" required label="What do you call this project?" slug="createProject" value={name} />
        <FormSection id="details" type="textarea" required label="All the details" slug="createProject" defaultValue={description} />

        <ButtonGroup>
          <Button kind="primary" type="submit">
            Publish!
          </Button>
          <Button kind="secondary" type="normal" onClick={this.onClickSaveAsDraft()}>
            Save as draft
          </Button>
        </ButtonGroup>
      </Form>
    </Layout>
  }
}))
