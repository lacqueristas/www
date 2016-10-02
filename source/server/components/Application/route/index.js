import regexpMap from "regexp-map"

import LandingPage from "../../LandingPage"
import CodeOfConduct from "../../CodeOfConduct"
import DataPolicy from "../../DataPolicy"

const path = (slug) => `^/${slug}\$`

export default regexpMap(
  {
    [path("")]: LandingPage,
    [path("code-of-conduct")]: CodeOfConduct,
    [path("data-policy")]: DataPolicy
  }
)
