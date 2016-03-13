import {
  pipe,
  map
} from "ramda"
const fetch = (database) => database.getItem("store").startWith("{}")

export default pipe(
  fetch,
  map(JSON.parse)
)
