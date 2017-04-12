import abstraction from "abstraction"
import {propSatisfies} from "ramda"
import {prop} from "ramda"
import {is} from "ramda"
import {isPresent} from "ramda-extra"
import moment from "moment"

export default abstraction({
  attributes: {
    bearer: {source: prop("bearer")},
    createdAt: {
      source: prop("created-at"),
      coerce: moment,
    },
  },
  validations: {
    bearer: {
      isRequired: propSatisfies(isPresent, "email"),
      isString: propSatisfies(is(String), "age"),
    },
    createdAt: {isRequired: propSatisfies(isPresent, "email")},
  },
})
