/* eslint immutable/no-mutation: "off"  */
import React, {PropTypes} from "react"

import {neutral} from "../colors"

const style = {
  backgroundColor: neutral,
  fontSize: 18
}

export default function Body ({children}) {
  return <body style={style} id="application">
    {children}

    <noscript>
      <h1>Hello!</h1>

      <p>
        You're visiting a application that works almost entirely via Javascript,
        but you don't have Javascript enabled. I get why you might do that,
        considering the nature of the modern web, but I like writing javascript
        and it makes designing UI a much more enjoyable experience.
      </p>

      <p>
        I would love to spend time making the application work without
        Javascript, but I just don't have the time or energy to do this! While
        server-side rendering is very common and approachable the technology I
        decided to work with is experimental and currently doesn't have any
        integration with server-side rendering.
      </p>

      <p>
        I'm a big fan of the open web and accessability and I try very hard to
        make Lacqueristas a home for <strong>anyone</strong> interested in
        nail polish. You are not invisible to this team.
        <a href="mailto:team@lacqueristas.club" title="Let me know you want a non-javascript version of lacqueristas">
          I would love to hear from you on this issue and our email is open to
          anyone wanting to talk about it.
        </a>
      </p>

      <p>
        Until then both Lita & the Lacqueristas Club hope you'll find a way
        to join us.
      </p>
    </noscript>
    <script async type="text/javascript" src="index.js" />
  </body>
}
Body.propTypes = {
  children: PropTypes.node.isRequired
}
