const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpGzip = require("gulp-gzip")
// const gulpHTMLValidator = require("gulp-html-validator")
const gulpHTMLMin = require("gulp-htmlmin")
const gulpSize = require("gulp-size")
const gulpMyth = require("gulp-myth")
const gulpUglify = require("gulp-uglify")

const SCRIPTS = [
  "./tmp/client/index.js",
  "./static/index.js"
]
const STYLES = [
  "./static/index.css"
]
const HTMLS = [
  "./static/index.html"
]
const SCRIPT = "index.js"
const STYLE = "index.css"
const DESINATION = "./tmp/static/"

gulp.task("scripts", () => {
  return gulp
    .src(SCRIPTS)
    .pipe(gulpConcat(SCRIPT))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
    .pipe(gulpUglify())
    .pipe(gulpGzip({
      gzipOptions: {
        level: 9
      }
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("styles", () => {
  return gulp.src(STYLES)
    .pipe(gulpConcat(STYLE))
    .pupe(gulpMyth({
      sourcemaps: true
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
    .pipe(gulpUglify())
    .pipe(gulpGzip({
      gzipOptions: {
        level: 9
      }
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
    // .pipe(gulpHTMLValidator({
    //   format: "html"
    // }))
    .pipe(gulpHTMLMin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeComments: true,
      removeTagWhitespace: true
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
    .pipe(gulpGzip({
      gzipOptions: {
        level: 9
      }
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("watch", () => {
  gulp.watch(SCRIPTS, ["scripts"])
  gulp.watch(HTMLS, ["htmls"])
})

gulp.task("default", ["scripts", "htmls", "watch"])
