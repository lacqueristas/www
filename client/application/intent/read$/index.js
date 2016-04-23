import {asGraph} from "~/client/application/model"

export default (database) => database
  .local
  .getItem("store")
  .map(asGraph)
