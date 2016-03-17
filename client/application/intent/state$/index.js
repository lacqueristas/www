import read$ from "../read$"
import {asLocalStorageInsert} from "~/client/application/model"

const defaultValue = {
  key: "store",
  value: JSON.stringify({})
}

export default ([signals$, storage]) => signals$
  .withLatestFrom(read$(storage), asLocalStorageInsert)
  .startWith(defaultValue)
  .share()