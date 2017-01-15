import React from "react"

import Button from "../../Button"

const formSectionStyle = {
  display: "flex",
  flexDirection: "column"
}
const mailchimpURL = "//club.us2.list-manage.com/subscribe/post?u=2659100f5014c16e6b9ba2742&amp;id=cf213912a3"

export default function Newsletter () {
  return <form data-componet="Newsletter" action={mailchimpURL} method="post" target="_blank" name="mc-embedded-subscribe-form">
    <section style={formSectionStyle}>
      <label htmlFor="email">Your email</label>
      <input id="email" name="EMAIL" type="email" required />
    </section>

    <section style={formSectionStyle}>
      <label htmlFor="name">Your name</label>
      <input id="name" name="NAME" type="text" required />
    </section>

    <section style={{position: "absolute", left: -5000}} aria-hidden="true">
      <input type="text" name="b_2659100f5014c16e6b9ba2742_cf213912a3" tabIndex="-1" value="" />
    </section>

    <section>
      <Button type="submit" kind="primary">
        We'll keep in touch!
      </Button>
    </section>
  </form>
}
