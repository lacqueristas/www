import {
  pipe,
  map
} from "ramda"

const fetch = (database) => database.getItem("store")
  .startWith("{}")
  .distinctUntilChanged()

export default pipe(
  fetch
)
