'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// add custom browserify options here
var customOpts = {
  entries: ['./app.js'],
  debug: true
};

var opts = assign({}, watchify.args, customOpts); // combine arguments passed in with customOpts

var b = watchify(browserify(opts)); // create watchified-browserify object

b.transform('reactify'); // transform react syntax

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler

b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    .pipe(source('bundle.js')) // simply pipes in a filename
    .pipe(buffer())

    // build sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file to relative location of bundle.js

    .pipe(gulp.dest('./')); // destination of bundle.js
}

gulp.task('uglify', function() {
  return gulp.src('bundle.js')
    .pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./'));
});
