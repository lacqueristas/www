import {Observable} from "rx"

import {catchActivitiesList$} from "~/client/activities/intent"
import {catchAccountsList$} from "~/client/accounts/intent"

import {asState} from "~/client/application/model"
import {initialState} from "~/client/application/model"


export default (http$$) => {
  return Observable
    .merge(
      catchActivitiesList$(http$$),
      catchAccountsList$(http$$)
    )
    .startWith({})
    .scan(asState, initialState())
}
