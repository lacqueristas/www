import regexpMap from "regexp-map"

import LandingPage from "../../LandingPage"
import CodeOfConduct from "../../CodeOfConduct"

const path = (slug) => `^/${slug}\$`

export default regexpMap(
  {
    [path("")]: LandingPage,
    [path("code-of-conduct")]: CodeOfConduct
  }
)
