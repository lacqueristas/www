import {path} from "ramda"
import {omit} from "ramda"
import {prop} from "ramda"
import {merge} from "ramda"
import {pipe} from "ramda"
import allP from "@unction/allp"
import resolveP from "@unction/resolvep"
import allObjectP from "@unction/allobjectp"
import mapValues from "@unction/mapvalues"

import startLoadingSignal from "../startLoadingSignal"
import finishLoadingSignal from "../finishLoadingSignal"
import updateLocationSignal from "../updateLocationSignal"
import clearFormSignal from "../clearFormSignal"
import mergeResourceSignal from "../mergeResourceSignal"
import storeCurrentSignal from "../storeCurrentSignal"
import exceptionSignal from "../exceptionSignal"

import pushProject from "../pushProject"
import pushPhotograph from "../pushPhotograph"

export default function createProjectSignal (slug: string) {
  return function thunk (dispatch, getState, {client}) {
    const state = getState()
    const currentSession = path(["ephemeral", "current", "session"], state)
    const session = path(["resources", "sessions", currentSession], state)
    const bearer = path(["attributes", "bearer"], session)
    const form = path(["ephemeral", "forms", slug], state)
    const attributes = omit(["photographs"], form)
    const photographs = prop("photographs", form)
    const projectRequest = pushProject(client)(bearer)
    const photographRequest = pushPhotograph(client)(bearer)

    return resolveP(dispatch(startLoadingSignal(slug)))
      .then(() => projectRequest(attributes))
      .then((project) => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(project)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: project.id,
            key: "project",
          })),
          photographs: allP(mapValues(photographRequest)(mapValues(merge({project}))(photographs))),
          project,
        })
      })
      .then(({project}) => {
        return allObjectP({
          finishLoadingSignal: dispatch(finishLoadingSignal(slug)),
          clearFormSignal: dispatch(clearFormSignal(slug)),
          updateLocationSignal: dispatch(updateLocationSignal(`/projects/${project.id}`)),
        })
      })
      .then(() => dispatch({type: "createProjectSignal"}))
      .catch(pipe(exceptionSignal, dispatch))
  }
}
