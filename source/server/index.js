/* eslint-disable import/max-dependencies */
import {join} from "path"
import requireEnvironmentVariables from "require-environment-variables"
import {createElement} from "react"
import {Provider} from "react-redux"
import {renderToStaticMarkup} from "react-dom/server"
import {getCss} from "cxs"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"
import urlParse from "url-parse"
import {replace} from "ramda"
import bugsnag from "bugsnag"

import {Application} from "@lacqueristas/ui"
import redux from "./redux"
import {logger} from "./remote"

requireEnvironmentVariables([
  "PORT",
  "NODE_ENV",
  "WWW_LOCATION",
  "ORIGIN_LOCATION",
  "BUGSNAG_API_PRIVATE",
])

const cssEmbed = replace("<style type=\"text/css\" data-id=\"cxs\"></style>")

if (process.env.NODE_ENV === "production") {
  bugsnag.register(process.env.BUGSNAG_API_PRIVATE)
}

const application = express()

application.use(cors())
application.use(morgan("dev"))
application.use(compression())
application.use(helmet())
application.use(express.static(join(__dirname, "..", "client")))

application.get("*", function get (request: any, response: any): string {
  const navigation = urlParse(request.url, true)
  const signals = {}
  const html = renderToStaticMarkup(
    createElement(
      Provider,
      {store: redux},
      createElement(
        Application,
        {
          navigation,
          signals,
        },
      )
    )
  )

  return response.send(cssEmbed(`<style type="text/css">${getCss()}</style>`, `<!DOCTYPE html>${html}`))
})

application.listen(
  process.env.PORT,
  (): any => logger.info(`Listening to ${process.env.PORT}`)
)
