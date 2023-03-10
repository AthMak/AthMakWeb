'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
	return gulp.src('./assets/scss/*.scss')
		.pipe(concat('global.scss'))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./assets/scss/*.scss', gulp.series('sass'));
});