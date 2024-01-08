const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSCSS(){
    return src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('./src/css/'));
  }

function watcher(){
    watch("src/scss/**/*scss",compilaSCSS)
}
exports.watcher = watcher;
exports.compilaSCSS = compilaSCSS;