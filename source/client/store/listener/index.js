import urlParse from "url-parse"

export const initialState = {
  starting: true,
  navigation: urlParse(location.href, true)
}

export default function listener (state = initialState, signal) {
  switch (signal.type) {
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
