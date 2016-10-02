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

import Application from "./components/Application"
import store from "./store"
import {logger} from "./remote"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "PORT",
  "WEB_CONCURRENCY",
  "NODE_ENV"
])

const application = express()

application.use(cors())
application.use(morgan("combined"))
application.use(compression())

application.use(express.static(join(__dirname, "..", "client")))
application.get("*", function get (request, response) {
  const navigation = urlParse(request.url, true)

  return response.send(renderToStaticMarkup(
    <Provider store={store}>
      <Application navigation={navigation} />
    </Provider>
  ))
})

application.listen(process.env.PORT, () => {
  return logger.info(`Listening to ${process.env.PORT}`)
})
