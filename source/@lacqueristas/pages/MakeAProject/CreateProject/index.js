import React, {PureComponent, PropTypes} from "react"
import {Form} from "@lacqueristas/elements"
import {FormSection} from "@lacqueristas/elements"

export default class CreateProject extends PureComponent {
  static propTypes = {
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

  render (): any {
    const {project} = this.props
    const {attributes} = project
    const {name} = attributes
    const {description} = attributes
    const paintedAt = attributes["painted-at"]

    return <Form name="MakeAProjectForm" action="createProject" slug="makeAProject">
      <FormSection id="name" type="text" required label="What do you call this project?" slug="makeAProject" value={name} />
      <FormSection id="description" type="textarea" required label="All the details" slug="makeAProject" defaultValue={description} />
      <FormSection id="painted-at" type="date" required label="When did you do it?" slug="makeAProject" value={paintedAt} />
    </Form>
  }
}
