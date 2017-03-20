import React, {PropTypes, PureComponent} from "react"
import {clientSide} from "@lacqueristas/decorators"
import {Layout} from "@lacqueristas/ui"
import {Heading} from "@lacqueristas/elements"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"
import {Button} from "@lacqueristas/elements"
import {ButtonGroup} from "@lacqueristas/elements"

export default clientSide(class MakeProject extends PureComponent {
  static authenticated = true
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

  render (): any {
    const {project} = this.props
    const {attributes} = project
    const {name} = attributes
    const {description} = attributes

    return <Layout subtitle="Making a project" data-component="MakeProject">
      <Heading kind="page">
        Make a Project
      </Heading>

      <Form name="SignUp" action="signUp" slug="signUp">
        <FormSection id="name" type="text" required label="What do you call this project?" slug="makeAProject" value={name} />
        <FormSection id="email" type="textarea" required label="All the details" slug="makeAProject" defaultValue={description} />

        <ButtonGroup>
          <Button kind="primary" type="submit">
            Publish!
          </Button>
          <Button kind="secondary" type="submit">
            Save as draft
          </Button>
        </ButtonGroup>
      </Form>
    </Layout>
  }
})
