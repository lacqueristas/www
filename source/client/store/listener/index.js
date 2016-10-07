import urlParse from "url-parse"
import createHistory from "history/createBrowserHistory"

export const initialState = {
  starting: true,
  navigation: urlParse(location.href, true)
}
export const history = createHistory()
export default function listener (state = initialState, signal) {
  switch (signal.type) {
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
