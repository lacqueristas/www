import {section} from "@cycle/dom"
import {input} from "@cycle/dom"
import {label} from "@cycle/dom"

export default (state) => {
  return section(
    ".login",
    {
      style: {flex: 1}
    },
    [
      label(
        ".email",
        {
          style: {flex: 1}
        },
        "Email"
      ),
      input(
        ".email",
        {
          style: {flex: 1}
        }
      ),
      label(
        ".password",
        {
          style: {flex: 1}
        },
        "Password"
      ),
      input(
        ".password",
        {
          style: {flex: 1},
          type: "password"
        }
      )
    ]
  )
}
