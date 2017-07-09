import abstraction from "abstraction"
import {propSatisfies} from "ramda"
import {prop} from "ramda"
import {is} from "ramda"
import {both} from "ramda"
import {equals} from "ramda"
import isPresent from "@unction/ispresent"
import isPopulated from "@unction/ispopulated"

import attributes from "./attributes"

export default abstraction({
  attributes: {
    id: {source: prop("id")},
    type: {source: prop("type")},
    attributes: {
      source: prop("attributes"),
      coerce: attributes,
    },
    links: {source: prop("links")},
    relationships: {source: prop("relationships")},
    meta: {source: prop("meta")},
  },
  validations: {
    id: {
      isRequired: propSatisfies(isPresent, "id"),
      isString: propSatisfies(is(String), "id"),
      isPopulated: propSatisfies(isPopulated, "id"),
    },
    type: {
      isRequired: propSatisfies(isPresent, "type"),
      isString: propSatisfies(is(String), "type"),
      isPopulated: propSatisfies(isPopulated, "type"),
      isSessionsResource: propSatisfies(both(isPresent, equals("sessions")), "type"),
    },
    attributes: {
      isPresent: propSatisfies(isPresent, "attributes"),
      isPopulated: propSatisfies(isPopulated, "attributes"),
      isObject: propSatisfies(is(Object), "attributes"),
    },
  },
})
