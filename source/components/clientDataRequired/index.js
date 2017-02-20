import React, {PureComponent} from "react"
import Layout from "../Layout"
import LoadingScreen from "./LoadingScreen"

export default function clientDataRequired (WrappedComponent) {
  return class ClientDataContainer extends PureComponent {
    render () {
      if (global.window) {
        return <WrappedComponent {...this.props} />
      }

      return <Layout subtitle="Finding llamas...">
        <LoadingScreen />
      </Layout>
    }
  }
}
