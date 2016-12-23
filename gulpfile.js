/* eslint import/no-commonjs: "off", node/no-unpublished-require: "off" */
const join = require("path").join
const Dotenv = require("dotenv")
const requireEnvironmentVariables = require("require-environment-variables")
const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
const gulpSize = require("gulp-size")
const gulpGzip = require("gulp-gzip")
// const gulpImagemin = require("gulp-imagemin")

Dotenv.load({silent: true})

requireEnvironmentVariables([])

const STYLES = [
  "./node_modules/font-awesome/css/font-awesome.css",
  "./node_modules/normalize.css/normalize.css",
  "./source/client/index.css"
]
const IMAGES = [
  "./source/images/*.png",
  "./source/images/*.ico"
]
const FONTS = [
  "./node_modules/font-awesome/fonts/*"
]
const ASSETS = [
  "./source/assets/browserconfig.xml",
  "./source/assets/manifest.json",
  "./source/assets/loadtestertool.xml",
  "./source/assets/favicon.ico"
]
const STYLE = "index.css"
const DESINATION = "./transpiled/client/"

gulp.task("styles", () => {
  return gulp.src(STYLES)
    .pipe(gulpConcat(STYLE))
    .pipe(gulpMyth())
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
    .pipe(gulpGzip({
      append: true,
      threshold: true,
      gzipOptions: {
        level: 9,
        memLevel: 9
      }
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("images", () => {
  return gulp.src(IMAGES)
    // .pipe(gulpImagemin({verbose: true}))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
    .pipe(gulpGzip({
      append: true,
      threshold: true,
      gzipOptions: {
        level: 9,
        memLevel: 9
      }
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("assets", () => {
  return gulp.src(ASSETS)
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
    .pipe(gulpGzip({
      append: true,
      threshold: true,
      gzipOptions: {
        level: 9,
        memLevel: 9
      }
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("fonts", () => {
  return gulp.src(FONTS)
    .pipe(gulp.dest(join(DESINATION, "fonts")))
})

gulp.task("watch", ["styles", "images", "assets"], () => {
  gulp.watch(STYLES, ["styles"])
  gulp.watch(IMAGES, ["images"])
  gulp.watch(ASSETS, ["assets"])
  gulp.watch(FONTS, ["fonts"])
})

gulp.task("build", ["styles", "images", "assets", "fonts"])
