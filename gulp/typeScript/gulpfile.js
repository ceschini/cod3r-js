// transformando TS em JS

const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transpilerTS() {
  return tsProject.src() // pega local source via json passado
    .pipe(tsProject()) // compila
    .pipe(gulp.dest('build'))
}

exports.default = series(transpilerTS)