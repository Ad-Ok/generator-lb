'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var size = require('gulp-size');

var config = require('./../config.js');
var build = require('./../utils/buildHelper.js');

// Output size of dist folder
gulp.task('buildSize:css', function () {
  return gulp.src(config.buildSize.srcCss)
    .pipe(size(config.buildSize.cfgCss));
});

// Output size of dist folder
gulp.task('buildSize:js', function () {
  return gulp.src(config.buildSize.srcJs)
    .pipe(size(config.buildSize.cfgJs));
});

// Output size of dist folder
gulp.task('buildSize:images', function () {
  return gulp.src(config.buildSize.srcImages)
    .pipe(size(config.buildSize.cfgImages));
});

// Output size of dist folder
gulp.task('buildSize', ['buildSize:css', 'buildSize:js','buildSize:images'], function () {
  return gulp.src(config.buildSize.srcAll)
    .pipe(size(config.buildSize.cfgAll));
});

// run build in sequence - this shoud be implemented in Gulp 4 natively
gulp.task('build', function(cb) {
  build.setBuild(true);
  runSequence(
    ['wiredep','clean'],
    ['styles','jade', 'scripts'],
    ['images', 'copy', 'extras'<% if (includeModernizr) { %>, 'modernizr'<% }%>],
    'useref',
    'buildSize',
    cb
  );
});