import React from "react"
import {PureComponent} from "react"
import PropTypes from "prop-types"

import GoogleTagManager from "./GoogleTagManager"

export default class Head extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: "Lacqueristas",
    subtitle: "Welcome To Polishworld",
  }

  render () {
    const {title} = this.props
    const {subtitle} = this.props

    return <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <title>{title} | {subtitle}</title>

      <GoogleTagManager />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="apple-touch-icon-precomposed" href="/apple-icon-precomposed.png" />
      <link rel="icon" kind="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" kind="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" kind="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" kind="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Handlee|Open+Sans" />

      <link rel="stylesheet" href="/index.css" />
      <link rel="copyright" href="/copyright.txt" />
      <link rel="author" href="/humans.txt" />

      <meta name="robots" content="index,follow" />

      <meta type="environment" name="ORIGIN_LOCATION" content={process.env.ORIGIN_LOCATION} />
      <meta type="environment" name="WWW_LOCATION" content={process.env.WWW_LOCATION} />
      <meta type="environment" name="LUMIN_LOCATION" content={process.env.LUMIN_LOCATION} />

      <style type="text/css" data-id="cxs" />

      <script type="application/javascript" src="/babel-helpers.js" />
      {process.env.NODE_ENV === "production" && <script src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js" data-apikey={process.env.BUGSNAG_API_PUBLIC} />}
    </head>
  }
}
