import {ok} from "httpstatuses"
import {created} from "httpstatuses"
import {redirect} from "httpstatuses"
import {path} from "ramda"
import {equals} from "ramda"
import {any} from "ramda"
import resolveP from "@unction/resolvep"
import rejectP from "@unction/rejectp"
import withoutKeyRecursive from "@unction/withoutkeyrecursive"

const toRaw = path(["data", "data"])
const successful = [ok, created, redirect]

export default function receiveResources (abstraction) {
  return function receiveResourcesAbstraction (response) {
    const raw = toRaw(response)
    const {status} = response
    const everyThingIsFine = any(equals(status), successful)

    if (everyThingIsFine) {
      return abstraction(raw)
        | withoutKeyRecursive("__abstraction__")
        | resolveP
    }

    return rejectP(new Error("Client received an unexpected status code from the server"))
  }
}
