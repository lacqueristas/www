/* eslint-disable no-useless-escape  */

import regexpMap from "regexp-map"

import LandingPage from "../LandingPage"
import CodeOfConduct from "../CodeOfConduct"
import DataPolicy from "../DataPolicy"
import OurTechnology from "../OurTechnology"
import PrivacyPolicy from "../PrivacyPolicy"
import TermsOfService from "../TermsOfService"
import ThisIsUs from "../ThisIsUs"
import SignUp from "../SignUp"
import FrontPage from "../FrontPage"
import MakeProject from "../MakeProject"

const path = (slug = "?") => `^/${slug}\$`

export default regexpMap(
  {
    [path()]: LandingPage,
    [path("code-of-conduct")]: CodeOfConduct,
    [path("data-policy")]: DataPolicy,
    [path("our-technology")]: OurTechnology,
    [path("privacy-policy")]: PrivacyPolicy,
    [path("terms-of-service")]: TermsOfService,
    [path("this-is-us")]: ThisIsUs,
    [path("sign-up")]: SignUp,
    [path("sign-in")]: SignIn,
    [path("front-page")]: FrontPage,
    [path("make-project")]: MakeProject,
  }
)
