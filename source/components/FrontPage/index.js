import React from "react"
import {connect} from "react-redux"
import {path} from "ramda"

import Layout from "../Layout"
import WelcomeMessage from "./WelcomeMessage"

const currentSession = (state) => {
  const id = path(["ephemeral", "self", "id"], state)

  return path(["resources", "sessions", id], state)
}
const associatedAccount = (session) => path(["relationships", "account"], session)
const withName = connect((state) => ({
  name: path(["data", "attributes", "name"], associatedAccount(currentSession(state))),
}))

export default function FrontPage () {
  return <Layout subtitle="The Front Page of Polish">
    <section data-component="FrontPage">
      <WelcomeMessage />
    </section>
  </Layout>
}
