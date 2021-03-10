// concatenar os dois arquivos em um soh e aplicar babel, depois minificar
const { series } = require('gulp')
const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

function pipeline(cb) {
  gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false, // nao quero comentarios
      presets: ['env'], // js mais recente
    }))
    .pipe(uglify()) // minificar
    .pipe(concat('calculadora.min.js'))
    .pipe(gulp.dest('build')) // destino
  return cb()
}

exports.default = series(pipeline)