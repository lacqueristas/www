import urlParse from "url-parse"
import {tapP} from "ramda-extra"
import {history} from "../../history"
import updateNavigation from "../updateNavigation"

export default function updateLocation (href) {
  return function thunk (dispatch) {
    return Promise
      .resolve(urlParse(href, true))
      .then(tapP(history.push))
      .then((location) => dispatch(updateNavigation(location)))
  }
}
