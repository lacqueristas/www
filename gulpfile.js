/* eslint-disable import/no-commonjs, node/no-unpublished-require, import/max-dependencies, flowtype/require-return-type */
const {join} = require("path")
const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
const gulpSize = require("gulp-size")
const gulpGzip = require("gulp-gzip")
const gulpBabel = require("gulp-babel")
const browserify = require("browserify")
const babelify = require("babelify")
const envify = require("envify")
const vinylSourceStream = require("vinyl-source-stream")
const vinylBuffer = require("vinyl-buffer")
const gulpChanged = require("gulp-changed")
const gulpUglify = require("gulp-uglify")
const {production} = require("gulp-environments")

const DESINATION = "./transpiled/"
const GZIP = {
  append: true,
  threshold: true,
  gzipOptions: {
    level: 9,
    memLevel: 9,
  },
}


gulp.task("build:@lacqueristas", () => {
  const destination = join(DESINATION, "@lacqueristas")

  return gulp.src([
    "./source/@lacqueristas/**/*.js",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpBabel())
    .pipe(gulpSize({
      title: "@lacqueristas",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:server", ["build:@lacqueristas"], () => {
  const destination = join(DESINATION, "server")

  return gulp.src([
    "./source/server/**/*.js",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpBabel())
    .pipe(gulpSize({
      title: "server",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:client", ["build:styles", "build:images", "build:assets", "build:fonts"], () => {
  const destination = join(DESINATION, "client")

  return browserify({
    entries: "./source/client/index.js",
    transform: [
      [babelify, {ignore: "./source/**/test.js"}],
      envify,
    ],
  })
    .bundle()
    .pipe(vinylSourceStream("index.js"))
    .pipe(vinylBuffer())
    .pipe(production(gulpUglify()))
    .pipe(production(gulp.dest(destination)))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(gulpSize({
      title: "client",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:styles", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./node_modules/font-awesome/css/font-awesome.css",
    "./node_modules/normalize.css/normalize.css",
    "./node_modules/skeleton-css/css/skeleton.css",
    "./source/client/index.css",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpConcat("index.css"))
    .pipe(gulpMyth())
    .pipe(production(gulp.dest(destination)))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(gulpSize({
      title: "styles",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:images", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./source/images/*.png",
    "./source/images/*.ico",
  ])
    .pipe(gulpChanged(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(gulpSize({
      title: "images",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:assets", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./source/assets/browserconfig.xml",
    "./source/assets/manifest.json",
    "./source/assets/loadtestertool.xml",
    "./source/assets/babel-helpers.js",
  ])
    .pipe(gulpChanged(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(gulpSize({
      title: "assets",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:fonts", () => {
  const destination = join(DESINATION, "client", "fonts")

  return gulp.src([
    "./node_modules/font-awesome/fonts/**/*",
  ])
    .pipe(gulpChanged(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(gulpSize({
      title: "fonts",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:build", ["build:server", "build:client"])
gulp.task("build:watch", ["build:server", "build:client"], () => {
  gulp.watch("./source/server/**/*", ["build:server"])
  gulp.watch("./source/client/**/*", ["build:client"])
})
