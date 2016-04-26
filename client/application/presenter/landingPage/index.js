import {img} from "snabbdom-helpers"
import {section} from "snabbdom-helpers"

import page from "../page"
import pageHeading from "../pageHeading"
import login from "../login"

const style = {
  "display": "flex",
  "justify-content": "center"
}
const logo = img({
  selector: ".llogo",
  style: {
    "flex": 1,
    "flex-grow": 1
  },
  props: {
    src: "/keyhole-llama.png",
    title: "Lacquerista Llama peeping out a hole"
  }
})
const title = pageHeading({
  style: {flex: 1},
  text: "Welcome to Lacqueristas!"
})

export default () => {
  return page({
    style,
    content: [
      logo,
      section({
        style: {
          "flex": 1,
          "flex-grow": 2,
          "display": "flex",
          "flex-direction": "column",
          "justify-content": "flex-end"
        },
        content: [
          title,
          login({
            style: {flex: 1}
          })
        ]
      })
    ]
  })
}
