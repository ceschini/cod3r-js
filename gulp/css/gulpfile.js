const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function unsassify() {
  return gulp.src('src/sass/index.scss')
    // tenta usar gulp-sass se der erro passa a ref da func
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copyIndex(cb) {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'))

  return cb()
}

exports.default = series(parallel(unsassify, copyIndex))