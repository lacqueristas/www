import React, {PureComponent} from "react"
import hoist from "hoist-non-react-statics"

export default function clientSide (Component: any): any {
  return hoist(
    class ClientSideComponent extends PureComponent {
      static clientSide = true

      render (): any {
        return <Component />
      }
    },
    Component
  )
}
