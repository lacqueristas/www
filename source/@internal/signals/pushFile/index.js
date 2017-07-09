import {prop} from "ramda"
import {invoker} from "ramda"
import {parse} from "li"

export default function pushFile (image) {
  return fetch(
    `${window.env.LUMIN_LOCATION}/images?lenses=original,thumbnail`,
    {
      method: "POST",
      body: image,
    }
  )
    .then(prop("headers"))
    .then(invoker(1, "get")("Link"))
    .then(parse)
}
