import abstraction from "abstraction"
import {propSatisfies} from "ramda"
import {prop} from "ramda"
import {is} from "ramda"
import isPresent from "@unction/ispresent"

export default abstraction({
  attributes: {
    email: {source: prop("email")},
    name: {source: prop("name")},
    createdAt: {source: prop("created-at")},
    updatedAt: {source: prop("updated-at")},
  },
  validations: {
    email: {
      presenceRequired: propSatisfies(isPresent, "email"),
      stringRequired: propSatisfies(is(String), "email"),
    },
    name: {
      presenceRequired: propSatisfies(isPresent, "name"),
      stringRequired: propSatisfies(is(String), "name"),
    },
    createdAt: {presenceRequired: propSatisfies(isPresent, "createdAt")},
    updatedAt: {presenceRequired: propSatisfies(isPresent, "updatedAt")},
  },
})
