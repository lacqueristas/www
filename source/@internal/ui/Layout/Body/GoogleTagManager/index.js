import React from "react"

const style = {
  display: "none",
  visibility: "hidden",
}

export default function GoogleTagManager () {
  return <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GBMRT5" height="0" width="0" style={style} />
  </noscript>
}
