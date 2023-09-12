const { src, dest, series, watch, parallel } = require("gulp");
const minifyCSS = require("gulp-minify-css");
const minifyHTML = require("gulp-minify-html");
const minifyJS = require("gulp-uglify");
const concat = require("gulp-concat");
const optimizeImages = require("gulp-optimize-images");

const globs = {
  html: "project/**/*.html",
  css: "project/css/**/*.css",
  js: "project/js/**/*.js",
  img: "project/pics/*",
};

// HTML Task
const minifyHTMLTask = () => {
  return src(globs.html).pipe(minifyHTML()).pipe(dest("dist"));
};
exports.html = minifyHTMLTask;

// CSS Task
const minifyCSSTask = () => {
  return src(globs.css)
    .pipe(concat("style.min.css"))
    .pipe(minifyCSS())
    .pipe(dest("dist/assets/css"));
};
exports.css = minifyCSSTask;

// JS Task
const minifyJSTask = () => {
  return src(globs.js, { sourcemaps: true })
    .pipe(minifyJS())
    .pipe(dest("dist/assets/js", { sourcemaps: "." }));
};
exports.js = minifyJSTask;

// Images Task
const optimizeImagesTask = () => {
  return src(globs.img)
    .pipe(
      optimizeImages({
        compressOptions: {
          jpeg: {
            quality: 50,
            progressive: true,
          },
          png: {
            quality: 90,
            progressive: true,
            compressionLevel: 6,
          },
          webp: {
            quality: 80,
          },
        },
      })
    )
    .pipe(dest("dist/assets/images"));
};
exports.img = optimizeImagesTask;

// Watch Tasks
function watchTasks() {
  watch(globs.html, minifyHTMLTask);
  watch(globs.css, minifyCSSTask);
  watch(globs.js, minifyJSTask);
  watch(globs.img, optimizeImagesTask);
}

// Export tasks
exports.default = series(
  parallel(minifyHTMLTask, minifyCSSTask, minifyJSTask, optimizeImagesTask),
  watchTasks
);
