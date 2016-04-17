const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
const gulpSize = require("gulp-size")
// const gulpGzip = require("gulp-gzip")

const STYLES = [
  "./client/index.css"
]
const HTMLS = [
  "./client/index.html"
]
const STYLE = "index.css"
const DESINATION = "./tmp/"

gulp.task("styles", () => {
  return gulp.src(STYLES)
    .pipe(gulpConcat(STYLE))
    .pipe(gulpMyth())
    // .pipe(gulpGzip({
    //   append: false,
    //   threshold: true,
    //   gzipOptions: {
    //     level: 9,
    //     memLevel: 9
    //   }
    // }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
    // .pipe(gulpGzip({
    //   append: false,
    //   threshold: true,
    //   gzipOptions: {
    //     level: 9,
    //     memLevel: 9
    //   }
    // }))
    .pipe(gulpSize({showFiles: true}))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("watch", ["styles", "htmls"], () => {
  gulp.watch(STYLES, ["styles"])
  gulp.watch(HTMLS, ["htmls"])
})

gulp.task("build", ["styles", "htmls"])
