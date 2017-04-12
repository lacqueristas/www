import {path} from "ramda"
import {allObjectP} from "ramda-extra"

import startingRequest from "../startingRequest"
import finishingRequest from "../finishingRequest"
import updateLocation from "../updateLocation"
import clearForm from "../clearForm"
import mergeResource from "../mergeResource"
import storeCurrent from "../storeCurrent"

import pushProject from "./pushProject"

export default function createProject (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const state = getState()
    const self = path(["ephemeral", "current", "self"], state)
    const session = path(["resources", "sessions", self], state)
    const bearer = path(["attributes", "bearer"], session)
    const attributes = path(["ephemeral", "forms", slug], state)

    const projectRequest = pushProject(client)

    return Promise
      .resolve(dispatch(startingRequest(slug)))
      .then((): Promise<ProjectResourceType> => projectRequest({
        attributes,
        bearer,
      }))
      .then((project: ProjectResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType, project: ProjectResourceType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResource(project)),
          storeCurrentSignal: dispatch(storeCurrent({
            id: project.id,
            key: "project",
          })),
          project,
        })
      })
      .then(({project}: {project: ProjectResourceType}): Promise<{finishingRequestSignal: SignalType, clearFormSignal: SignalType, updateLocationSignal: updateLocationSignal}> => {
        return allObjectP({
          finishingRequestSignal: dispatch(finishingRequest(slug)),
          storeCurrentSignal: dispatch(clearForm(slug)),
          updateLocationSignal: dispatch(updateLocation(`/projects/${project.id}`)),
        })
      })
      .then((): SignalType => dispatch({type: "createProject"}))
  }
}
