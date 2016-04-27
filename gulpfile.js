const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
const gulpSize = require("gulp-size")
const gulpGzip = require("gulp-gzip")
const gulpImage = require("gulp-image")

const STYLES = [
  "./node_modules/normalize.css/normalize.css",
  "./client/index.css"
]
const HTMLS = [
  "./client/index.html",
  "./client/data-policy.html",
  "./client/our-technology.html",
  "./client/privacy-policy.html",
  "./client/terms-of-service.html",
  "./client/us.html"
]
const IMAGES = [
  "./assets/*.png"
]
const ASSETS = [
  "./assets/browserconfig.xml",
  "./assets/manifest.json",
  "./assets/favicon.ico"
]
const STYLE = "index.css"
const DESINATION = "./tmp/"

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
    .pipe(gulpImage())
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

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
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

gulp.task("watch", ["styles", "images", "assets", "htmls"], () => {
  gulp.watch(STYLES, ["styles"])
  gulp.watch(IMAGES, ["images"])
  gulp.watch(ASSETS, ["assets"])
  gulp.watch(HTMLS, ["htmls"])
})

gulp.task("build", ["styles", "images", "assets", "htmls"])
