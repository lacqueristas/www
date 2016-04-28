import {section} from "snabbdom-helpers"
import {input} from "snabbdom-helpers"
import {label} from "snabbdom-helpers"

export default () => {
  return section({
    selector: ".password",
    content: [
      label({
        attrs: {
          "for": "#login_password"
        },
        content: "Password"
      }),
      input({
        selector: "#login_password",
        props: {
          type: "password",
          name: "password"
        }
      })
    ]
  })
}
