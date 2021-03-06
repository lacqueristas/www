import React from "react"
import cxs from "cxs"

import {Button} from "@internal/elements"
import {NativeForm} from "@internal/elements"
import {NativeFormSection} from "@internal/elements"

const mailchimpURL = "//club.us2.list-manage.com/subscribe/post?u=2659100f5014c16e6b9ba2742&amp;id=cf213912a3"
const hiddenStyle = {
  position: "absolute",
  left: -5000,
}

export default function Newsletter () {
  return <NativeForm name="mc-embedded-subscribe-form" action={mailchimpURL} target="_blank">

    <NativeFormSection id="email" name="EMAIL" type="email" required label="Your email" />
    <NativeFormSection id="name" name="NAME" type="text" required label="Your name" />

    <section className={cxs(hiddenStyle)} aria-hidden="true">
      <input type="text" name="b_2659100f5014c16e6b9ba2742_cf213912a3" tabIndex="-1" value="" />
    </section>

    <section>
      <Button type="submit" kind="primary">
        We&apos;ll keep in touch!
      </Button>
    </section>
  </NativeForm>
}
