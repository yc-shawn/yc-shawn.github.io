'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
// var argv = require('minimist')(process.argv.slice(2));
// var angularOrder = require('gulp-angular-order');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
// var argv = require('yargs').argv;
var cleanCSS = require('gulp-clean-css');
// var uglify = require('gulp-uglify');
// var aws = require('gulp-awspublish');
var htmlmin = require('gulp-htmlmin');
// var angularTemplatecache = require('gulp-angular-templatecache');

gulp.task('browser-sync', function(){
  browserSync.init(null, {
    open: false,
    server: { baseDir: './' }
  });
})

gulp.task('html', function(){
  return gulp.src('./src/index.html')
    .pipe(inject(gulp.src(['./src/templates/*.html']), {
      starttag: '<!-- inject:{{path}} -->',
      relative: true,
      transform: function (filePath, file) {
        return file.contents.toString('utf8')
      }
    }))
    // .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
})

// gulp.task('components', function(){
//   return gulp.src('./src/components/**/*.html')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(angularTemplatecache('templateCacheHtml.js', {
//       module: 'qubiqle',
//       root: '/components'
//     }))
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(browserSync.stream());
// })
//
gulp.task('sass', function(){
  return gulp.src("./src/styles/index.sass")
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
});

gulp.task('script', function(){
  // return gulp.src(["./src/**/*.js", "!./src/assets/**/*.js"])
  //   .pipe(angularOrder())
  return gulp.src(["./src/index.js", "./src/scripts/**/*.js"])
    .pipe(concat('app.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
})

// gulp.task('assets', function () {
//   return gulp.src("./src/assets/**/*.*")
//     .pipe(gulp.dest('./dist/assets'));
// });

// gulp.task('rootFile', function () {
//   return gulp.src(["./src/*.xml"]).pipe(gulp.dest('./dist'));
// });
// gulp.task('otherCss', function () {
//   return gulp.src("./src/css/*.css").pipe(gulp.dest('./dist/css'));
// });

// gulp.task('build', ['sass', 'html', 'components', 'script', 'assets', 'rootFile', 'otherCss']);

gulp.task('serve', function(){
  gulp.start(['html', 'script', 'sass', 'browser-sync']);
  gulp.watch(['./src/styles/**/*.sass'], ['sass']);
  // gulp.watch(['./src/**/*.js'], ['script']);
  gulp.watch(['./src/**/*.html'], ['html']);
})
