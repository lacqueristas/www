import React from "react"

import Button from "../../Button"

const formSectionStyle = {
  display: "flex",
  flexDirection: "row"
}
const mailchimpURL = "//club.us2.list-manage.com/subscribe/post?u=2659100f5014c16e6b9ba2742&amp;id=cf213912a3"

export default function Newsletter () {
  return <form data-componet="Newsletter" action={mailchimpURL} method="post" target="_blank">
    <section style={formSectionStyle}>
      <label htmlFor="email">Your email</label>
      <input id="email" name="email" type="email" required />
    </section>

    <section style={formSectionStyle}>
      <label htmlFor="name">Your name</label>
      <input id="name" name="name" type="text" required />
    </section>

    <div>
      <div style={{position: "absolute", left: -5000}} aria-hidden="true">
        <input type="text" name="b_2659100f5014c16e6b9ba2742_cf213912a3" tabIndex="-1" value="" />
      </div>
    </div>

    <section>
      <Button type="submit" kind="primary">
        We'll let you know when we're open.
      </Button>
    </section>
  </form>
}
