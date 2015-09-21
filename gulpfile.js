'use strict';

// gulp
var gulp = require('gulp')
    , sass = require('gulp-sass')
    , concat = require('gulp-concat')
    , uglify = require('gulp-uglify')
    , autoprefixer = require('gulp-autoprefixer')
    // , nano = require('gulp-cssnano')
    , csslint = require('gulp-csslint');
    ;

// CSS: sass; concat;
gulp.task('css', function () {
  gulp.src(['./css/scss/pratiques-picturales.scss'])
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sass({ sourceMap: false }))
    .pipe(sass({ sourceComments: true }))
    .pipe(autoprefixer())
    //.pipe(nano())
    .pipe(csslint({
      'box-sizing': false
    }))
    .pipe(csslint.reporter())
    .pipe(gulp.dest('./css'));
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
