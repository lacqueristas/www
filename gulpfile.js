/* eslint import/no-commonjs: "off", node/no-unpublished-require: "off" */
const {join} = require("path")
const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
const gulpSize = require("gulp-size")
const gulpGzip = require("gulp-gzip")
const gulpBabel = require("gulp-babel")
const browserify = require("browserify")
const babelify = require("babelify")
const vinylSourceStream = require("vinyl-source-stream")
const vinylBuffer = require("vinyl-buffer")
const gulpChanged = require("gulp-changed")

const DESINATION = "./transpiled/"
const GZIP = {
  append: true,
  threshold: true,
  gzipOptions: {
    level: 9,
    memLevel: 9,
  },
}

gulp.task("components", () => {
  const destination = join(DESINATION, "components")

  return gulp.src([
    "./source/components/**/*.js",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpBabel())
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(destination))
})

gulp.task("server", ["components"], () => {
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

gulp.task("client", ["styles", "images", "assets", "fonts"], () => {
  const destination = join(DESINATION, "client")

  return browserify({
    entries: "./source/client/index.js",
    transform: [
      [babelify, {
        ignore: "./source/**/test.js",
      }],
    ],
  })
    .bundle()
    .pipe(vinylSourceStream("index.js"))
    .pipe(vinylBuffer())
    .pipe(gulpSize({
      title: "client",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(gulpGzip(GZIP))
    .pipe(gulpSize({
      title: "client.gz",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("styles", () => {
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
    .pipe(gulpSize({
      title: "styles",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(gulpGzip(GZIP))
    .pipe(gulpSize({
      title: "styles.gz",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("images", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./source/images/*.png",
    "./source/images/*.ico",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpSize({
      title: "images",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(gulpGzip(GZIP))
    .pipe(gulpSize({
      title: "images.gz",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("assets", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./source/assets/browserconfig.xml",
    "./source/assets/manifest.json",
    "./source/assets/loadtestertool.xml",
    "./source/assets/favicon.ico",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpSize({
      title: "assets",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(gulpGzip(GZIP))
    .pipe(gulpSize({
      title: "assets.gz",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("fonts", () => {
  const destination = join(DESINATION, "client", "fonts")

  return gulp.src([
    "./node_modules/font-awesome/fonts/**/*",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpSize({
      title: "fonts",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(gulpGzip(GZIP))
    .pipe(gulpSize({
      title: "fonts.gz",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build", ["server", "client"])
gulp.task("watch", ["server", "client"], () => {
  gulp.watch("./source/server/**/*", ["server"])
  gulp.watch("./source/client/**/*", ["client"])
})
