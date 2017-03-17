import React from "react"
import LoadingScreen from "./LoadingScreen"

export default function clientSide (Component: any): Function {
  return function ClientContainer (props: any): any {
    if (global.window) {
      return <Component {...props} />
    }

    return <LoadingScreen />
  }
}