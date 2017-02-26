import React from "react"
import LoadingScreen from "./LoadingScreen"

export default function clientSide (Component) {
  return function ClientContainer (props) {
    if (global.window) {
      return <Component {...props} />
    }

    return <LoadingScreen />
  }
}
