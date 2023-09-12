const gulp = require("gulp");
const minifyCSS = require("gulp-minify-css");
const minifyHTML = require("gulp-minify-html");
const minifyJS = require("gulp-uglify");

const minifyCSSTask = () => {
  return gulp.src("project/**/*.css").pipe(minifyCSS()).pipe(gulp.dest("dist"));
};

const minifyHTMLTask = () => {
  return gulp
    .src("project/**/*.html")
    .pipe(minifyHTML())
    .pipe(gulp.dest("dist"));
};

const minifyJSTask = () => {
  return gulp.src("project/**/*.js").pipe(minifyJS()).pipe(gulp.dest("dist"));
};

gulp.task(
  "default",
  gulp.parallel(minifyCSSTask, minifyHTMLTask, minifyJSTask)
);
