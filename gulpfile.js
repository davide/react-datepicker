'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('browserify'),
    source = require('vinyl-source-stream');

function getJSBundler (path) {
    return browserify([path]).transform("reactify");
}

gulp.task('bundle', function() {
    getJSBundler("./src/js/ui/datepicker/DatePicker.jsx")
        .bundle()
        .pipe(source('datepicker.js'))
        .pipe(gulp.dest('./src/build/'));
});

gulp.task('bundle-example', function() {
    getJSBundler("./src/example/example.jsx")
        .bundle()
        .pipe(source('example.js'))
        .pipe(gulp.dest('./src/example/'));
});


function watchStuff(globs) {
    gulp.watch(globs, ['bundle']);
}

gulp.task('watch', function() {
    watchStuff('src/js/**/*.js*');
});

gulp.task('tests', function() {
    //TODO:..
});



