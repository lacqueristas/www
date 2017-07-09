import abstraction from "abstraction"
import {propSatisfies} from "ramda"
import {prop} from "ramda"
import {is} from "ramda"
import isPresent from "@unction/ispresent"

export default abstraction({
  attributes: {
    name: {source: prop("name")},
    description: {source: prop("description")},
    paintedAt: {source: prop("painted-at")},
    createdAt: {source: prop("created-at")},
    updatedAt: {source: prop("updated-at")},
  },
  validations: {
    name: {
      presenceRequired: propSatisfies(isPresent, "name"),
      stringRequired: propSatisfies(is(String), "name"),
    },
    description: {
      presenceRequired: propSatisfies(isPresent, "description"),
      stringRequired: propSatisfies(is(String), "description"),
    },
    paintedAt: {presenceRequired: propSatisfies(isPresent, "paintedAt")},
    createdAt: {presenceRequired: propSatisfies(isPresent, "createdAt")},
    updatedAt: {presenceRequired: propSatisfies(isPresent, "updatedAt")},
  },
})
