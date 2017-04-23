import {path} from "ramda"
import {omit} from "ramda"
import {prop} from "ramda"
import {map} from "ramda"
import {merge} from "ramda"
import allP from "@unction/allp"
import resolveP from "@unction/resolvep"
import allObjectP from "@unction/allobjectp"

import startLoadingSignal from "../startLoadingSignal"
import finishLoadingSignal from "../finishLoadingSignal"
import updateLocationSignal from "../updateLocationSignal"
import clearFormSignal from "../clearFormSignal"
import mergeResourceSignal from "../mergeResourceSignal"
import storeCurrentSignal from "../storeCurrentSignal"
import pushProject from "../pushProject"
import pushPhotograph from "../pushPhotograph"

export default function createProjectSignal (slug: string): Function {
  return function thunk (dispatch: ReduxDispatchType, getState: GetStateType, {client}: {client: HSDKClientType}): Promise<SignalType> {
    const state = getState()
    const self = path(["ephemeral", "current", "self"], state)
    const session = path(["resources", "sessions", self], state)
    const bearer = path(["attributes", "bearer"], session)
    const form = path(["ephemeral", "forms", slug], state)
    const attributes = omit(["photographs"], form)
    const photographs = prop("photographs", form)
    const projectRequest = pushProject(client)(bearer)
    const photographRequest = pushPhotograph(client)(bearer)

    return resolveP(dispatch(startLoadingSignal(slug)))
      .then((): Promise<ProjectResourceType> => projectRequest(attributes))
      .then((project: ProjectResourceType): Promise<{mergedResourceSignal: SignalType, storeCurrentSignal: SignalType, project: ProjectResourceType}> => {
        return allObjectP({
          mergedResourceSignal: dispatch(mergeResourceSignal(project)),
          storeCurrentSignal: dispatch(storeCurrentSignal({
            id: project.id,
            key: "project",
          })),
          photographs: allP(map(photographRequest, map(merge({project}), photographs))),
          project,
        })
      })
      .then(({project}: {project: ProjectResourceType}): Promise<{finishLoadingSignal: SignalType, clearFormSignal: SignalType, updateLocationSignal: updateLocationSignal}> => {
        return allObjectP({
          finishLoadingSignal: dispatch(finishLoadingSignal(slug)),
          clearFormSignal: dispatch(clearFormSignal(slug)),
          updateLocationSignal: dispatch(updateLocationSignal(`/projects/${project.id}`)),
        })
      })
      .then((): SignalType => dispatch({type: "createProjectSignal"}))
  }
}
