import store from "store"

export default function persist (state: StateType): StateType {
  store.set("state", state)

  return state
}
