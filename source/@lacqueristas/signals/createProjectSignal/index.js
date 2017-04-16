import {path} from "ramda"
import {allObjectP} from "ramda-extra"

import startLoadingSignal from "../startLoadingSignal"
import finishLoadingSignal from "../finishLoadingSignal"
import updateLocationSignal from "../updateLocationSignal"
import clearFormSignal from "../clearFormSignal"
import mergeResourceSignal from "../mergeResourceSignal"
import storeCurrentSignal from "../storeCurrentSignal"

import pushProject from "./pushProject"

export default function createProjectSignal (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const state = getState()
    const self = path(["ephemeral", "current", "self"], state)
    const session = path(["resources", "sessions", self], state)
    const bearer = path(["attributes", "bearer"], session)
    const attributes = path(["ephemeral", "forms", slug], state)

    const projectRequest = pushProject(client)

    return Promise
      .resolve(dispatch(startLoadingSignal(slug)))
      .then((): Promise<ProjectResourceType> => projectRequest({
        attributes,
        bearer,
      }))
      .then((project: ProjectResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType, project: ProjectResourceType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(project)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: project.id,
            key: "project",
          })),
          project,
        })
      })
      .then(({project}: {project: ProjectResourceType}): Promise<{finishLoadingSignal: SignalType, clearFormSignal: SignalType, updateLocationSignal: updateLocationSignal}> => {
        return allObjectP({
          finishLoadingSignal: dispatch(finishLoadingSignal(slug)),
          storeCurrentSignal: dispatch(clearFormSignal(slug)),
          updateLocationSignal: dispatch(updateLocationSignal(`/projects/${project.id}`)),
        })
      })
      .then((): SignalType => dispatch({type: "createProjectSignal"}))
  }
}
