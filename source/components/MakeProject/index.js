import React, {PropTypes, PureComponent} from "react"

import Layout from "../Layout"
import Heading from "../Heading"

export default class MakeProject extends PureComponent {
  static propTypes = {
    project: PropTypes.shape({
      attributes: PropTypes.shape({

      })
    })
  }
  render () {
    return <Layout subtitle="Making a project" data-component="MakeProject">
      <Heading kind="page">
        Make a Project
      </Heading>
    </Layout>
  }
}
