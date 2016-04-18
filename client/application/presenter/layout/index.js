import {img} from "@cycle/dom"
import {section} from "@cycle/dom"

import page from "../page"
import pageHeading from "../pageHeading"
import login from "../login"

export default (state) => {
  return page(
    [
      img(
        ".llogo",
        {
          style: {flex: 2},
          src: "/keyhole-llama.png",
          title: "Lacquerista Llama peeping out a hole"
        }
      ),
      section(
        [
          pageHeading({
            style: {flex: 1},
            content: "Welcome to Lacqueristas!"
          }),
          login(state)
        ]
      )
    ]
  )
}
