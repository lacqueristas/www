import urlParse from "url-parse"

import asState from "./asState"

export const initialState = {
  starting: true,
  navigation: urlParse(location.href, true)
}

export default function listener (state = initialState, signal) {
  switch (signal.type) {
    case "RECEIVED_RESOURCES": {
      return asState(state, signal.payload)
    }
    case "NAVIGATE": {
      const navigation = urlParse(signal.payload.href, true)

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
