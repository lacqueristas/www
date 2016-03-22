import read$ from "../read$"
import {asLocalStorageInsert} from "~/client/application/model"

const defaultValue: Object = {
  key: "store",
  value: JSON.stringify({})
}

export default ([signals$, storage]): any => signals$
  .withLatestFrom(read$(storage), asLocalStorageInsert)
  .startWith(defaultValue)
  .share()
