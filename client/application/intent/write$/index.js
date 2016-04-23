import read$ from "../read$"
import {asLocalStorageInsert} from "~/client/application/model"

export default ([signals$, storage]) => signals$
  .withLatestFrom(read$(storage), asLocalStorageInsert)
