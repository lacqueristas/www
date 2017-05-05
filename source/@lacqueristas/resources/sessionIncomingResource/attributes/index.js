import abstraction from "abstraction"
import {propSatisfies} from "ramda"
import {prop} from "ramda"
import {is} from "ramda"
import isPresent from "@unction/ispresent"

export default abstraction({
  attributes: {
    bearer: {source: prop("bearer")},
    createdAt: {source: prop("created-at")},
  },
  validations: {
    bearer: {
      isRequired: propSatisfies(isPresent, "bearer"),
      isString: propSatisfies(is(String), "bearer"),
    },
    createdAt: {isRequired: propSatisfies(isPresent, "createdAt")},
  },
})
