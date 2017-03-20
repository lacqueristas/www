import React from "react"

import {Layout} from "@lacqueristas/ui"

export default function PageNotFound (): any {
  return <Layout subtitle="We couldn't find the page you wanted" kind="article" data-component="PageNotFound">
    <p>
      I&apos;m sorry, but we couldn&apos;t find that page.
    </p>
  </Layout>
}
