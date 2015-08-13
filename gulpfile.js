'use strict';
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps'); 
var babel = require('gulp-babel');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

var paths = { sass: 'static/css/',
              public_css: 'public/css',
              jsx: 'static/jsx/**/*.jsx',
              js: 'static/js/**/*.js',
              public_js: 'public/js/',
              bower: 'bower_components/'
            };

gulp.task('default', function() {
    
});

gulp.task('sass', function() {
    return sass(paths.sass, {compass: true })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.public_css));
});

gulp.task('jsx', function() {
    return gulp.src(paths.jsx)
        .pipe(babel())
        .on('error', function(error) {
            gutil.log(gutil.colors.red('Error happens:' + error.message)); 
            gutil.beep();
            this.emit('end');
        })
        .pipe(gulp.dest(paths.public_js));
});

gulp.task('bower', function() {
    return gulp.src()
        .pipe(gulp.dest('test'));
});

gulp.task('webpack', function() {
    return gulp.src([paths.jsx, paths.js])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass + '**/*.scss', ['sass']); 
    gulp.watch(paths.jsx, ['jsx']);
});
