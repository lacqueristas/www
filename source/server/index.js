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
import urlParse from "url-parse"
import {replace} from "ramda"

import {Application} from "../components"
import store from "./store"
import {logger} from "./remote"

requireEnvironmentVariables([
  "PORT",
  "NODE_ENV",
  "WWW_LOCATION",
  "ORIGIN_LOCATION",
])

const cssEmbed = replace("<style type=\"text/css\" data-id=\"cxs\"></style>")

const application = express()

application.use(cors())
application.use(morgan("combined"))
application.use(compression())
application.use(express.static(join(__dirname, "..", "client")))

application.get("*", function get (request, response) {
  const navigation = urlParse(request.url, true)
  const signals = {}
  const html = renderToStaticMarkup(
    createElement(Provider, {store}, createElement(Application, {navigation, signals}))
  )

  return response.send(cssEmbed(`<style type="text/css">${getCss()}</style>`, `<!DOCTYPE html>${html}`))
})

application.listen(process.env.PORT, () => {
  return logger.info(`Listening to ${process.env.PORT}`)
})
