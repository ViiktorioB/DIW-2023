const { series, src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const limpiarCSS = require('gulp-clean-css');
const limpiarJS = require('gulp-uglify');
var concat = require('gulp-concat');


// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function minimizaCSS(){
  return src('src/css/*.css')
  .pipe(limpiarCSS())
  .pipe(dest('dist/css'));
}

function minimizaJS(){
  return src('src/js/*.js')
  .pipe(limpiarJS())
  .pipe(dest('dist/js'));
}

function CompliarSCSS(){
  return src('src/sass/*.scss')
  .pipe(sass())
  .pipe(dest('src/css'));
}

function watcher(){
  watch('src/sass/*.scss',CompliarSCSS)
}

function concatenarCSS(){
  return src('dist/css/*.css')
  .pipe(concat('all.css'))
  .pipe(dest('dist/css'));
}

function concatenarJS(){
  return src('dist/js/*.js')
  .pipe(concat('all.js'))
  .pipe(dest('dist/js'));
}

exports.build = build;
exports.default = series(clean, build);
exports.minimitzacss = minimizaCSS
exports.minimitzajs = minimizaJS
exports.sass = CompliarSCSS;
exports.watcher = watcher;
exports.concatCSS = concatenarCSS;
exports.concatJS = concatenarJS;
exports.kittens = series(minimizaCSS, minimizaJS, CompliarSCSS, concatenarCSS, concatenarJS);