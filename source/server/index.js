import {join} from "path"
import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import React from "react"
import {Provider} from "react-redux"
import {renderToStaticMarkup} from "react-dom/server"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import compression from "compression"
import urlParse from "url-parse"

import {Application} from "../components"
import store from "./store"
import {logger} from "./remote"

Dotenv.load({
  silent: true
})

requireEnvironmentVariables([
  "PORT",
  "NODE_ENV",
  "WWW_LOCATION",
  "ORIGIN_LOCATION"
])

const application = express()

application.use(cors())
application.use(morgan("combined"))
application.use(compression())
application.use(express.static(join(__dirname, "..", "client")))

application.get("*", function get (request, response) {
  const navigation = urlParse(request.url, true)
  const signals = {}
  const html = renderToStaticMarkup(
    <Provider store={store}>
      <Application navigation={navigation} signals={signals} />
    </Provider>
  )

  return response.send(`<!DOCTYPE html>${html}`)
})

application.listen(process.env.PORT, () => {
  return logger.info(`Listening to ${process.env.PORT}`)
})
