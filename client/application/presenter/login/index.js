import {prop} from "ramda"
import {section} from "snabbdom-helpers"
import loginEmail from "./loginEmail"
import loginPassword from "./loginPassword"

export default ({ephemeral}) => {
  if (ephemeral) {
    return section({
      selector: "#login",
      content: [
        loginEmail(prop("loginEmail", ephemeral)),
        loginPassword(prop("loginEmail", ephemeral))
      ]
    })
  }
  return "Something is wrong."
}
