import {section} from "snabbdom-helpers"
import {input} from "snabbdom-helpers"
import {label} from "snabbdom-helpers"

export default (loginEmail) => {
  return section({
    selector: ".email",
    content: [
      label({
        attrs: {
          "for": "#login_email"
        },
        content: "Email"
      }),
      input({
        selector: "#login_email",
        props: {
          type: "text",
          name: "email"
        },
        attrs: {
          value: loginEmail
        }
      })
    ]
  })
}
