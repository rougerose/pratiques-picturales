'use strict';

// gulp
var gulp = require('gulp')
    , sass = require('gulp-sass')
    , concat = require('gulp-concat')
    , uglify = require('gulp-uglify')
    , autoprefixer = require('gulp-autoprefixer')
    //, nano = require('gulp-cssnano')
    , plumber = require('gulp-plumber')
    , notify = require('gulp-notify')
    , rename = require('gulp-rename')
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
    .pipe(gulp.dest('./css'))
    .pipe(notify({
      title: 'Gulp',
      subtitle: 'success',
      message: 'css task',
      sound: "Pop"
    }));
});

gulp.task('copy', function() {
  gulp.src([
    'bower_components/sticky-kit/jquery.sticky-kit.js',
    'node_modules/smooth-scroll/dist/js/smooth-scroll.js',
    'bower_components/Scrollspy/scrollspy.js'
  ])
    .pipe(gulp.dest('./js/src'));
});

// minifyjs : uglify;
gulp.task('minifyjs', function () {
  gulp.src(['./js/src/*.js'])
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('./js/dist/'));
});

// concat scripts pour composition article-numero
gulp.task('concat_compo_article_numero', function() {
  return gulp.src([
    './js/dist/utils.min.js',
    './js/dist/scrollspy.min.js',
    './js/dist/jquery.sticky-kit.min.js',
    './js/dist/smooth-scroll.min.js'
  ])
    .pipe(concat('article_numero.min.js', {newLine: '\n;'}))
    .pipe(gulp.dest('./js/dist'));
});

// watch
gulp.task('watch', function () {
  gulp.watch('css/scss/*.scss', ['css']);
});


// tâches
gulp.task('default', ['css']);
gulp.task('jscopy', ['copy']);
//gulp.task('jslib',['js_lib']);
gulp.task('jsmini', ['minifyjs']);
gulp.task('jsconcat',['concat_compo_article_numero']);
