const gulp = require('gulp')
const webserver = require('gulp-webserver')
const { series, watch } = require('gulp')

function servidor(cb) {
  return gulp.src('build')
    .pipe(webserver({
      port: 8080,
      open: true,
      livereload: true,
    }))
}

function monitorarArquivos(cb) {
  // sempre que alterar o html vai chamar a funcao appHtml
  watch('src/**/*.html', series('appHtml'))
  watch('src/**/*.scss', series('appCss'))
  watch('src/**/*.js', series('appJs'))
  watch('src/assets/imgs/**/*.*', series('appImg'))
  return cb()
}

module.exports = {
  monitorarArquivos,
  servidor
}