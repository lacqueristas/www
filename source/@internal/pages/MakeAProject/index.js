import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import {clientSide} from "@internal/decorators"
import {authenticate} from "@internal/decorators"
import {Layout} from "@internal/ui"
import {Heading} from "@internal/elements"
import {Button} from "@internal/elements"
import {ButtonGroup} from "@internal/elements"
import {Form} from "@internal/elements"
import {FormSection} from "@internal/elements"
import {FileInput} from "@internal/elements"
import {clearFormSignal} from "@internal/signals"
import {createProjectSignal} from "@internal/signals"
import {formFieldSelector} from "@internal/selectors"


const slug = "makeAProject"

@clientSide
@authenticate
@connect(
  createStructuredSelector({
    ...formFieldSelector({
      slug,
      name: "photographs",
    }),
  }),
  {
    clearForm: clearFormSignal,
    createProject: createProjectSignal,
  }
)
export default class MakeAProject extends PureComponent {
  static propTypes = {
    draftProject: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    photographs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }

  static defaultProps = {photographs: []}

  onClickDraft = (event) => {
    event.preventDefault()

    this.props.draftProject()
  }

  onClickReset = (event) => {
    event.preventDefault()

    this.props.clearForm(slug)
  }

  render () {
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
          <Button kind="secondary" onClick={this.onClickDraft}>
            Save as draft
          </Button>
          <Button kind="secondary" type="reset" onClick={this.onClickReset}>
            Let this go
          </Button>
        </ButtonGroup>
      </Form>
    </Layout>
  }
}
