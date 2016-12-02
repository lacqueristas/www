import urlParse from "url-parse"

export default function initialState () {
  return {
    navigation: urlParse(location, true),
    ui: {
      forms: {}
    },
    data: {}
  }
}
