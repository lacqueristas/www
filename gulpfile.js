const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
const gulpSize = require("gulp-size")
const gulpGzip = require("gulp-gzip")
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
    .pipe(gulpUglify())
    .pipe(gulpGzip({
      append: false,
      threshold: true,
      gzipOptions: {
        level: 9,
        memLevel: 9
      }
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("styles", () => {
  return gulp.src(STYLES)
    .pipe(gulpConcat(STYLE))
    .pipe(gulpMyth())
    .pipe(gulpGzip({
      append: false,
      threshold: true
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
    .pipe(gulpGzip({
      append: false,
      threshold: true
    }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("watch", ["scripts", "styles", "htmls"], () => {
  gulp.watch(SCRIPTS, ["scripts"])
  gulp.watch(STYLES, ["styles"])
  gulp.watch(HTMLS, ["htmls"])
})

gulp.task("build", ["scripts", "styles", "htmls"])
