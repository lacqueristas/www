import urlParse from "url-parse"
import createHistory from "history/createBrowserHistory"

import asState from "./asState"

export const initialState = {
  starting: true,
  navigation: urlParse(location.href, true)
}
export const history = createHistory()
export default function listener (state = initialState, signal) {
  switch (signal.type) {
    case "RECEIVED_RESOURCES": {
      return asState(state, signal.payload)
    }
    case "NAVIGATE": {
      const navigation = urlParse(signal.payload.href, true)

      history.push(navigation.pathname)

      return {
        ...state,
        navigation
      }
    }
    default: {
      console.warn({signal})

      return state
    }
  }
}
