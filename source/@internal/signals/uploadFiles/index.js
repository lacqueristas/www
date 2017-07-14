import allP from "@unction/allp"
import thenP from "@unction/thenp"
import mapValues from "@unction/mapvalues"

import updateInput from "../updateInput"
import errorInput from "../errorInput"
import pushFile from "../pushFile"

export default function uploadFiles ({slug, name, accepted, rejected}) {
  return function thunk (dispatch) {
    rejected
      | mapValues(
        (value) => dispatch(
          errorInput({
            value,
            slug,
            name,
            multiple: true,
          })
        )
      )

    accepted
      | mapValues(pushFile)
      | allP
      | thenP(
        mapValues(
          (value) => dispatch(
            updateInput({
              value,
              slug,
              name,
              multiple: true,
            })
          )
        )
      )
      | thenP(() => dispatch({type: "uploadFiles"}))
  }
}
