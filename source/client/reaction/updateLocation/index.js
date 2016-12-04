import urlParse from "url-parse"
import {history} from "../../history"

export default function updateLocation ({state, payload: {href}}) {
  history.push(urlParse(href, true))

  return state
}
