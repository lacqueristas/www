import urlParse from "url-parse"

export default function initialState (url) {
  return {
    ephemeral: {
      current: {},
      forms: {},
    },
    navigation: urlParse(url, true),
    resources: {},
  }
}
