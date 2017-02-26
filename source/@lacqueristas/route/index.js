/* eslint-disable no-useless-escape  */

import regexpMap from "regexp-map"

import {LandingPage} from "@lacqueristas/pages"
import {CodeOfConduct} from "@lacqueristas/pages"
import {DataPolicy} from "@lacqueristas/pages"
import {OurTechnology} from "@lacqueristas/pages"
import {PrivacyPolicy} from "@lacqueristas/pages"
import {TermsOfService} from "@lacqueristas/pages"
import {ThisIsUs} from "@lacqueristas/pages"
import {SignIn} from "@lacqueristas/pages"
import {SignUp} from "@lacqueristas/pages"
import {FrontPage} from "@lacqueristas/pages"
import {MakeProject} from "@lacqueristas/pages"

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
