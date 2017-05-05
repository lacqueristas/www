import {path} from "ramda"

export default function selfQuery (state: StateType): SelfQueryStateType {
  const sessionId = path(["ephemeral", "current", "session"], state)
  const session = path(["resources", "sessions", sessionId], state)
  const accountId = path(["relationships", "account", "data", "id"], session)
  const account = path(["resources", "accounts", accountId], state)

  return {self: account}
}
