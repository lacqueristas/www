import React, {PureComponent} from "react"
import hoist from "hoist-non-react-statics"

export default function authenticate (Component: any): any {
  return hoist(
    class AuthenticatedComponent extends PureComponent {
      static authenticate = true

      render (): any {
        return <Component />
      }
    },
    Component
  )
}
