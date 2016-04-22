import {section} from "snabbdom-helpers"
import {input} from "snabbdom-helpers"
import {label} from "snabbdom-helpers"

export default (properties) => {
  return section({
    ...properties,
    selector: "#login",
    content: [
      section({
        selector: ".email",
        content: [
          label({
            "for": "#login_email",
            "content": "Email"
          }),
          input({
            selector: "#login_email",
            type: "text",
            name: "email"
          })
        ]
      }),
      section({
        selector: ".password",
        content: [
          label({
            "for": "#login_password",
            "content": "Password"
          }),
          input({
            selector: "#login_password",
            type: "password",
            name: "password"
          })
        ]
      })
    ]
  })
}