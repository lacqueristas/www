import {img} from "snabbdom-helpers"
import {section} from "snabbdom-helpers"

import page from "../page"
import pageHeading from "../pageHeading"
import login from "../login"

export default () => {
  return page({
    style: {
      "display": "flex",
      "justify-content": "center"
    },
    content: [
      img({
        selector: ".llogo",
        style: {
          "flex": 1,
          "flex-grow": 1
        },
        props: {
          src: "/keyhole-llama.png",
          title: "Lacquerista Llama peeping out a hole"
        }
      }),
      section({
        style: {
          "flex": 1,
          "flex-grow": 2,
          "display": "flex",
          "flex-direction": "column",
          "justify-content": "flex-end"
        },
        content: [
          pageHeading({
            style: {flex: 1},
            text: "Welcome to Lacqueristas!"
          }),
          login({
            style: {flex: 1}
          })
        ]
      })
    ]
  })
}
