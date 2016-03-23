const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
// const gulpSize = require("gulp-size")
// const gulpHTMLMin = require("gulp-htmlmin")
// const gulpGzip = require("gulp-gzip")
// const gulpUglify = require("gulp-uglify")

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
    .pipe(gulp.dest(DESINATION))
    // .pipe(gulpUglify())
    // .pipe(gulpGzip())
    // .pipe(gulpSize({showFiles: true}))
    // .pipe(gulp.dest(DESINATION))
})

gulp.task("styles", () => {
  return gulp.src(STYLES)
    .pipe(gulpConcat(STYLE))
    .pipe(gulpMyth())
    .pipe(gulp.dest(DESINATION))
    // .pipe(gulpGzip())
    // .pipe(gulpSize({showFiles: true}))
    // .pipe(gulp.dest(DESINATION))
})

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
    .pipe(gulp.dest(DESINATION))
    // .pipe(gulpHTMLMin({
    //   collapseWhitespace: true,
    //   conservativeCollapse: true,
    //   collapseBooleanAttributes: true,
    //   removeComments: true,
    //   removeTagWhitespace: true
    // }))
    // .pipe(gulpGzip())
    // .pipe(gulpSize({showFiles: true}))
    // .pipe(gulp.dest(DESINATION))
})

gulp.task("watch", ["scripts", "styles", "htmls"], () => {
  gulp.watch(SCRIPTS, ["scripts"])
  gulp.watch(STYLES, ["styles"])
  gulp.watch(HTMLS, ["htmls"])
})

gulp.task("build", ["scripts", "styles", "htmls"])
