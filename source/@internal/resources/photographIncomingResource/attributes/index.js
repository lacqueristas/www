import abstraction from "abstraction"
import {propSatisfies} from "ramda"
import {prop} from "ramda"
import {is} from "ramda"
import isPresent from "@unction/ispresent"

export default abstraction({
  attributes: {
    original: {source: prop("original")},
    thumbnail: {source: prop("thumbnail")},
    createdAt: {source: prop("created-at")},
    updatedAt: {source: prop("updated-at")},
  },
  validations: {
    original: {
      presenceRequired: propSatisfies(isPresent, "original"),
      stringRequired: propSatisfies(is(String), "original"),
    },
    thumbnail: {
      presenceRequired: propSatisfies(isPresent, "thumbnail"),
      stringRequired: propSatisfies(is(String), "thumbnail"),
    },
    createdAt: {presenceRequired: propSatisfies(isPresent, "createdAt")},
    updatedAt: {presenceRequired: propSatisfies(isPresent, "updatedAt")},
  },
})
