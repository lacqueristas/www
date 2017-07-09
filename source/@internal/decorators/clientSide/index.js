import React from "react"
import {PureComponent} from "react"
import hoist from "hoist-non-react-statics"

export default function clientSide (Component) {
  return hoist(
    class ClientSideComponent extends PureComponent {
      static clientSide = true

      render () {
        return <Component />
      }
    },
    Component
  )
}
