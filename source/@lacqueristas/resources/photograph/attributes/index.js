import abstraction from "abstraction"
import {propSatisfies} from "ramda"
import {prop} from "ramda"
import {is} from "ramda"
import {isPresent} from "ramda-extra"

export default abstraction({
  attributes: {
    original: {source: prop("original")},
    thumbnail: {source: prop("thumbnail")},
    createdAt: {
      source: prop("created-at"),
      coerce: (value: any): Date => new Date(value),
    },
    updatedAt: {
      source: prop("updated-at"),
      coerce: (value: any): Date => new Date(value),
    },
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
