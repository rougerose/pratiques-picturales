'use strict';

// gulp
var gulp = require('gulp')
    , sass = require('gulp-sass')
    , concat = require('gulp-concat')
    , uglify = require('gulp-uglify')
    , autoprefixer = require('gulp-autoprefixer')
    //, nano = require('gulp-cssnano')
    , csslint = require('gulp-csslint')
    , plumber = require('gulp-plumber')
    , notify = require('gulp-notify')
    ;

var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Beep"
  })(err);

  this.emit('end');
};

// CSS: sass; concat;
gulp.task('css', function () {
  gulp.src(['./css/scss/pratiques_picturales.scss'])
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sass({ sourceMap: false }))
    .pipe(sass({ sourceComments: true }))
    .pipe(autoprefixer())
    //.pipe(nano())
    .pipe(csslint({
      'box-sizing': false,
      'box-model': false
    }))
    .pipe(csslint.reporter())
    .pipe(gulp.dest('./css'))
    .pipe(notify({
      title: 'Gulp',
      subtitle: 'success',
      message: 'css task',
      sound: "Pop"
    }));
});

// librairies js: concat;
// gulp.task('jslib', function () {
//   gulp.src([ ])
//     .pipe(concat('libraries.js',{newLine: ';\r\n'}))
//     .pipe(gulp.dest('./javascript'));
// });

// minifyjs : uglify;
// gulp.task('minifyjs', function () {
//   gulp.src(['./javascript/libraries.js'])
//     .pipe(uglify())
//     .pipe(gulp.dest('./javascript'));
// });

// watch
gulp.task('watch', function () {
  gulp.watch('css/scss/*.scss', ['css']);
});


// tâches
gulp.task('default', ['css']);
// gulp.task('libjs',['jslib']);
// gulp.task('minify', ['minifyjs']);
