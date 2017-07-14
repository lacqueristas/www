import {path} from "ramda"
import {omit} from "ramda"
import {prop} from "ramda"
import {merge} from "ramda"
import {pipe} from "ramda"
import allP from "@unction/allp"
import resolveP from "@unction/resolvep"
import allObjectP from "@unction/allobjectp"
import mapValues from "@unction/mapvalues"

import startLoading from "../startLoading"
import finishLoading from "../finishLoading"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeCurrent from "../storeCurrent"
import exception from "../exception"

import pushProject from "../pushProject"
import pushPhotograph from "../pushPhotograph"

export default function createProject (slug) {
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

    return resolveP(dispatch(startLoading(slug)))
      .then(() => projectRequest(attributes))
      .then((project) => {
        return allObjectP({
          mergedResource: dispatch(mergeResource(project)),
          storeCurrent: dispatch(storeCurrent({
            id: project.id,
            key: "project",
          })),
          photographs: photographs
            | mapValues(merge({project}))
            | mapValues(photographRequest)
            | allP,
          project,
        })
      })
      .then(({project}) => {
        return allObjectP({
          finishLoading: dispatch(finishLoading(slug)),
          clearForm: dispatch(clearForm(slug)),
          updateLocation: dispatch(updateLocation(`/projects/${project.id}`)),
        })
      })
      .then(() => dispatch({type: "createProject"}))
      .catch(pipe(exception, dispatch))
  }
}
